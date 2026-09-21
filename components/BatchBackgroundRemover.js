"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";
import { removeBackground } from "@/lib/removeBackground";
import { validateImage } from "@/lib/validateImage";

const MAX_IMAGES = 10;
const MAX_CONCURRENT_JOBS = 2;

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function outputName(fileName) {
  const base = fileName.replace(/\.[^/.]+$/, "") || "image";
  return `${base}-no-background.png`;
}

function uniqueName(name, usedNames) {
  const lastDot = name.lastIndexOf(".");
  const base = lastDot === -1 ? name : name.slice(0, lastDot);
  const extension = lastDot === -1 ? "" : name.slice(lastDot);
  let candidate = name;
  let count = 2;

  while (usedNames.has(candidate)) {
    candidate = `${base}-${count}${extension}`;
    count += 1;
  }

  usedNames.add(candidate);
  return candidate;
}

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function StatusBadge({ item }) {
  const states = {
    waiting: { label: "Waiting", className: "bg-white/[0.08] text-white/55" },
    processing: { label: "Processing", className: "bg-white/[0.12] text-white/75" },
    completed: { label: "Completed", className: "bg-emerald-400/15 text-emerald-200" },
    failed: { label: "Failed", className: "bg-red-400/15 text-red-200" },
  };
  const state = states[item.status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${state.className}`}>
      {item.status === "processing" && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />}
      {item.status === "completed" && <Icon name="check" className="h-3.5 w-3.5" />}
      {item.status === "failed" && <Icon name="alert" className="h-3.5 w-3.5" />}
      {state.label}
    </span>
  );
}

export default function BatchBackgroundRemover() {
  const [items, setItems] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [selectionError, setSelectionError] = useState("");
  const [zipError, setZipError] = useState("");
  const [isCreatingZip, setIsCreatingZip] = useState(false);
  const inputRef = useRef(null);
  const itemsRef = useRef([]);
  const activeJobsRef = useRef(new Map());
  const queueStoppedRef = useRef(false);
  const nextItemIdRef = useRef(0);
  const nextJobIdRef = useRef(0);
  const scheduleQueueRef = useRef(null);

  const updateItems = useCallback((updater) => {
    const next = typeof updater === "function" ? updater(itemsRef.current) : updater;
    itemsRef.current = next;
    setItems(next);
  }, []);

  const revokeItemUrls = useCallback((item) => {
    if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
  }, []);

  const startJob = useCallback(
    (itemId) => {
      const item = itemsRef.current.find((entry) => entry.id === itemId);
      if (!item || item.status !== "waiting" || queueStoppedRef.current) return;

      const jobId = ++nextJobIdRef.current;
      activeJobsRef.current.set(jobId, itemId);
      updateItems((current) =>
        current.map((entry) =>
          entry.id === itemId
            ? { ...entry, status: "processing", progress: 0, error: "", jobId }
            : entry
        )
      );

      const run = async () => {
        try {
          const resultBlob = await removeBackground(item.file, {
            onProgress: (progress) => {
              const current = itemsRef.current.find((entry) => entry.id === itemId);
              if (current?.jobId !== jobId) return;

              updateItems((entries) =>
                entries.map((entry) =>
                  entry.id === itemId && entry.jobId === jobId
                    ? { ...entry, progress }
                    : entry
                )
              );
            },
          });

          const current = itemsRef.current.find((entry) => entry.id === itemId);
          if (current?.jobId !== jobId) return;

          const resultUrl = URL.createObjectURL(resultBlob);
          if (current.previewUrl) URL.revokeObjectURL(current.previewUrl);
          updateItems((entries) =>
            entries.map((entry) =>
              entry.id === itemId && entry.jobId === jobId
                ? {
                    ...entry,
                    file: null,
                    previewUrl: "",
                    status: "completed",
                    progress: 1,
                    resultBlob,
                    resultUrl,
                    error: "",
                  }
                : entry
            )
          );
        } catch (error) {
          console.error(error);
          const current = itemsRef.current.find((entry) => entry.id === itemId);
          if (current?.jobId !== jobId) return;

          updateItems((entries) =>
            entries.map((entry) =>
              entry.id === itemId && entry.jobId === jobId
                ? {
                    ...entry,
                    status: "failed",
                    progress: 0,
                    error: "Background removal failed. Please try again.",
                  }
                : entry
            )
          );
        } finally {
          activeJobsRef.current.delete(jobId);
          scheduleQueueRef.current?.();
        }
      };

      void run();
    },
    [updateItems]
  );

  const scheduleQueue = useCallback(() => {
    if (queueStoppedRef.current) return;

    const freeSlots = MAX_CONCURRENT_JOBS - activeJobsRef.current.size;
    if (freeSlots <= 0) return;

    itemsRef.current
      .filter((item) => item.status === "waiting")
      .slice(0, freeSlots)
      .forEach((item) => startJob(item.id));
  }, [startJob]);

  useEffect(() => {
    scheduleQueueRef.current = scheduleQueue;
    scheduleQueue();
  }, [items, scheduleQueue]);

  useEffect(
    () => () => {
      queueStoppedRef.current = true;
      itemsRef.current.forEach(revokeItemUrls);
      itemsRef.current = [];
    },
    [revokeItemUrls]
  );

  const addFiles = useCallback(
    (fileList) => {
      const selectedFiles = Array.from(fileList || []);
      if (!selectedFiles.length) return;

      const validFiles = [];
      const problems = [];

      selectedFiles.forEach((file) => {
        const problem = validateImage(file);
        if (problem) {
          problems.push(`${file.name}: ${problem}`);
        } else {
          validFiles.push(file);
        }
      });

      const available = MAX_IMAGES - itemsRef.current.length;
      const acceptedFiles = validFiles.slice(0, Math.max(0, available));
      const skippedForLimit = validFiles.length - acceptedFiles.length;

      if (problems.length || skippedForLimit) {
        const messages = [...problems];
        if (skippedForLimit) {
          messages.push(`Only ${MAX_IMAGES} images can be added to one batch. ${skippedForLimit} image${skippedForLimit === 1 ? "" : "s"} was not added.`);
        }
        setSelectionError(messages.join(" "));
      } else {
        setSelectionError("");
      }

      if (!acceptedFiles.length) return;

      queueStoppedRef.current = false;
      const additions = acceptedFiles.map((file) => ({
        id: ++nextItemIdRef.current,
        file,
        fileName: file.name,
        fileSize: file.size,
        previewUrl: URL.createObjectURL(file),
        resultBlob: null,
        resultUrl: "",
        status: "waiting",
        progress: 0,
        error: "",
        jobId: null,
      }));
      updateItems((current) => [...current, ...additions]);
    },
    [updateItems]
  );

  const removeItem = useCallback(
    (itemId) => {
      const item = itemsRef.current.find((entry) => entry.id === itemId);
      if (!item) return;

      revokeItemUrls(item);
      updateItems((current) => current.filter((entry) => entry.id !== itemId));
    },
    [revokeItemUrls, updateItems]
  );

  const retryItem = useCallback(
    (itemId) => {
      queueStoppedRef.current = false;
      updateItems((current) =>
        current.map((item) =>
          item.id === itemId && item.status === "failed"
            ? { ...item, status: "waiting", progress: 0, error: "", jobId: null }
            : item
        )
      );
    },
    [updateItems]
  );

  const clearBatch = useCallback(() => {
    queueStoppedRef.current = true;
    itemsRef.current.forEach(revokeItemUrls);
    updateItems([]);
    setZipError("");
    setSelectionError(
      activeJobsRef.current.size
        ? "The queue was cleared. Images already processing will finish in this browser, but their results will be discarded."
        : ""
    );
  }, [revokeItemUrls, updateItems]);

  const downloadAll = useCallback(async () => {
    const completedItems = itemsRef.current.filter(
      (item) => item.status === "completed" && item.resultBlob
    );
    if (!completedItems.length) return;

    setIsCreatingZip(true);
    setZipError("");

    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      const usedNames = new Set();

      completedItems.forEach((item) => {
        zip.file(uniqueName(outputName(item.fileName), usedNames), item.resultBlob);
      });

      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 },
      });
      downloadBlob(zipBlob, "clyro-backgrounds.zip");
    } catch (error) {
      console.error(error);
      setZipError("We couldn't create the ZIP file. Please try downloading the images individually.");
    } finally {
      setIsCreatingZip(false);
    }
  }, []);

  const completedCount = items.filter((item) => item.status === "completed").length;
  const failedCount = items.filter((item) => item.status === "failed").length;
  const processingCount = items.filter((item) => item.status === "processing").length;
  const waitingCount = items.filter((item) => item.status === "waiting").length;
  const finished = items.length > 0 && processingCount === 0 && waitingCount === 0;
  const summary = !items.length
    ? `Add up to ${MAX_IMAGES} images`
    : finished
      ? failedCount
        ? `${completedCount} completed · ${failedCount} failed`
        : "All images processed"
      : `${completedCount} of ${items.length} completed`;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">CLYRO mini app</p>
          <h3 className="mt-1 text-2xl font-semibold text-white">Batch Background Remover</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
            Remove up to {MAX_IMAGES} backgrounds at once. Images are processed in this browser, with no more than {MAX_CONCURRENT_JOBS} running at a time.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
          <span className="font-medium text-white">{summary}</span>
          {!finished && (processingCount || waitingCount) ? (
            <span className="mt-1 block text-xs text-white/45">
              {processingCount ? `${processingCount} processing` : ""}
              {processingCount && waitingCount ? " · " : ""}
              {waitingCount ? `${waitingCount} waiting` : ""}
            </span>
          ) : null}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept={Object.keys(siteConfig.upload.accept).join(",")}
        className="sr-only"
        onChange={(event) => {
          addFiles(event.target.files);
          event.target.value = "";
        }}
      />

      <div
        onDragEnter={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => {
          if (event.currentTarget === event.target) setDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          addFiles(event.dataTransfer.files);
        }}
        className={`rounded-3xl border border-dashed p-5 transition sm:p-6 ${
          dragging ? "border-white/60 bg-white/[0.09]" : "border-white/15 bg-black/20"
        }`}
      >
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-medium text-white">Drop images here, or add them from your device.</p>
            <p className="mt-1 text-sm text-white/45">
              {Object.values(siteConfig.upload.accept).join(", ")} · up to {siteConfig.upload.maxSizeMB} MB each · {items.length}/{MAX_IMAGES} added
            </p>
          </div>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={items.length >= MAX_IMAGES}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon name="plus" className="h-4 w-4" />
            Add images
          </button>
        </div>
      </div>

      {selectionError && (
        <p role="alert" className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200">
          {selectionError}
        </p>
      )}

      {items.length ? (
        <ul className="space-y-3" aria-label="Batch image queue">
          {items.map((item) => (
            <li key={item.id} className="rounded-3xl border border-white/10 bg-black/20 p-3 sm:p-4">
              <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
                <div className="checker h-20 w-full shrink-0 overflow-hidden rounded-2xl bg-white/[0.06] sm:w-24">
                  <img
                    src={item.resultUrl || item.previewUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="max-w-full truncate text-sm font-medium text-white">{item.fileName}</p>
                    <StatusBadge item={item} />
                  </div>
                  <p className="mt-1 text-xs text-white/45">{formatFileSize(item.fileSize)}</p>

                  {item.status === "processing" && (
                    <div className="mt-3 max-w-md">
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white transition-[width] duration-300"
                          style={{ width: `${Math.max(4, Math.round((item.progress || 0) * 100))}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-white/45">Removing background… {Math.round((item.progress || 0) * 100)}%</p>
                    </div>
                  )}

                  {item.status === "failed" && <p className="mt-2 text-xs text-red-200">{item.error}</p>}
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                  {item.status === "completed" && (
                    <button
                      type="button"
                      onClick={() => downloadBlob(item.resultBlob, outputName(item.fileName))}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-black hover:bg-neutral-200"
                    >
                      <Icon name="download" className="h-3.5 w-3.5" />
                      Download
                    </button>
                  )}
                  {item.status === "failed" && (
                    <button
                      type="button"
                      onClick={() => retryItem(item.id)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white/80 hover:bg-white/[0.08]"
                    >
                      <Icon name="refresh" className="h-3.5 w-3.5" />
                      Retry
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="rounded-full border border-white/10 px-3.5 py-2 text-xs text-white/55 hover:bg-white/[0.08] hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-black/20 px-5 py-10 text-center text-sm text-white/45">
          Add up to {MAX_IMAGES} JPG, PNG, or WebP images to begin.
        </div>
      )}

      {zipError && <p role="alert" className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-200">{zipError}</p>}

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={clearBatch}
          disabled={!items.length}
          className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear all
        </button>
        <button
          type="button"
          onClick={downloadAll}
          disabled={!completedCount || isCreatingZip}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Icon name="download" className="h-4 w-4" />
          {isCreatingZip ? "Creating ZIP…" : "Download all"}
        </button>
      </div>
    </div>
  );
}
