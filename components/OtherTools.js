"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

const BatchBackgroundRemover = dynamic(
  () => import("@/components/BatchBackgroundRemover"),
  { ssr: false }
);

const TOOL_INFO = {
  "Batch Background Remover": {
    icon: "transparent",
    description: "Remove backgrounds from up to 10 images in a browser-safe queue.",
    action: "batch-background",
  },
  "Image Compressor": {
    icon: "compress",
    description: "Shrink image size while keeping it looking sharp.",
    action: "compression",
  },
  "Image Resizer": {
    icon: "resize",
    description: "Set exact width and height, then download instantly.",
    action: "resize",
  },
  "JPG to PNG": {
    icon: "swap",
    description: "Convert JPG images to PNG directly in your browser.",
    action: "convert-png",
  },
  "PNG to JPG": {
    icon: "swap",
    description: "Convert PNG images to a lightweight JPG.",
    action: "convert-jpg",
  },
  "WebP Converter": {
    icon: "image",
    description: "Convert common images to WebP for smaller websites.",
    action: "convert-webp",
  },
  "Image Cropper": {
    icon: "crop",
    description: "Crop and frame an image before downloading it.",
    action: "crop",
  },
  "Image Rotator": {
    icon: "rotate",
    description: "Rotate or flip an image without opening another app.",
    action: "rotate",
  },
  "Photo Editor": {
    icon: "sparkles",
    description: "Adjust, filter, add text and build full compositions.",
    action: "soon",
  },
};

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read this image."));
    };
    img.src = url;
  });
}

function extFor(type) {
  if (type === "image/jpeg") return "jpg";
  if (type === "image/webp") return "webp";
  return "png";
}

export default function OtherTools() {
  const [open, setOpen] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const [quality, setQuality] = useState(0.82);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(800);
  const [angle, setAngle] = useState(90);
  const [keepRatio, setKeepRatio] = useState(true);
  const inputRef = useRef(null);

  const info = open ? TOOL_INFO[open] : null;

  function close() {
    setOpen(null);
    setFile(null);
    setPreview("");
    setBusy(false);
  }

  function openTool(name) {
    setOpen(name);
    setFile(null);
    setPreview("");
  }

  async function chooseFile(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    try {
      const img = await loadImage(selected);
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
    } catch {}
  }

  async function process() {
    if (!file || !info || info.action === "soon") return;
    setBusy(true);
    try {
      const img = await loadImage(file);
      let outW = Number(width) || img.naturalWidth;
      let outH = Number(height) || img.naturalHeight;

      if (info.action === "resize" && keepRatio) {
        const ratio = img.naturalHeight / img.naturalWidth;
        outH = Math.max(1, Math.round(outW * ratio));
      }

      const convertType =
        info.action === "convert-jpg" ? "image/jpeg" :
        info.action === "convert-webp" ? "image/webp" :
        "image/png";

      if (info.action === "compression") {
        outW = img.naturalWidth;
        outH = img.naturalHeight;
      }

      const rotate = info.action === "rotate" ? Number(angle) : 0;
      const swap = rotate === 90 || rotate === 270;
      const canvas = document.createElement("canvas");
      canvas.width = swap ? outH : outW;
      canvas.height = swap ? outW : outH;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      if (convertType === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.save();
      if (rotate) {
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.drawImage(img, -outW / 2, -outH / 2, outW, outH);
      } else {
        ctx.drawImage(img, 0, 0, outW, outH);
      }
      ctx.restore();

      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, convertType, info.action === "compression" ? quality : 0.92)
      );
      if (!blob) throw new Error("Export failed.");

      const base = file.name.replace(/\.[^/.]+$/, "");
      const suffix = info.action === "compression" ? "-compressed" : "-clyro";
      downloadBlob(blob, `${base}${suffix}.${extFor(convertType)}`);
    } catch (error) {
      console.error(error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <section
        id="tools"
        aria-labelledby="tools-title"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8"
      >
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">More tools on the way</p>
          <h2 id="tools-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            All your image tools, opening right here.
          </h2>
          <p className="mt-3 text-sm leading-6 text-fg/55 sm:text-base">
            Click an app and it opens as a glass workspace. Finish your job, close it, and you are back on CLYRO.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[
            ...siteConfig.tools,
            { icon: "crop", name: "Image Cropper", launched: true },
            { icon: "rotate", name: "Image Rotator", launched: true },
            { icon: "sparkles", name: "Photo Editor", launched: false },
          ].map((t) => {
            const data = TOOL_INFO[t.name];
            return (
              <li key={t.name}>
                <button
                  type="button"
                  onClick={() => openTool(t.name)}
                  className="tool-launch group flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-35px_rgba(124,92,255,.8)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.07] text-fg/70 transition group-hover:scale-105 group-hover:text-fg">
                    <Icon name={data?.icon || t.icon} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium leading-snug">{t.name}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-fg/45">{data?.description}</p>
                    <span className="mt-3 inline-flex rounded-full bg-fg/[0.06] px-2.5 py-1 text-[11px] text-fg/55">
                      {t.launched ? "Open app" : "Coming soon"}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {open && (
        <div className="tool-modal fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={open}>
          <button className="absolute inset-0 cursor-default bg-black/45 backdrop-blur-md" aria-label="Close" onClick={close} />
          <div className={`tool-window relative z-10 w-full overflow-hidden rounded-[28px] border border-white/20 bg-[#17151d]/90 shadow-[0_40px_120px_-35px_rgba(0,0,0,.9)] backdrop-blur-3xl ${info.action === "batch-background" ? "max-w-5xl" : "max-w-2xl"}`}>
            <div className="flex h-14 items-center gap-3 border-b border-white/10 px-4">
              <div className="flex gap-1.5">
                <button onClick={close} aria-label="Close" className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center text-sm font-medium text-white/80">{open}</div>
              <span className="w-10" />
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-7">
              {info.action === "batch-background" ? (
                <BatchBackgroundRemover />
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">CLYRO mini app</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">{open}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">{info.description}</p>
                  </div>

                  {info.action === "soon" ? (
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/[0.07] text-white/70"><Icon name="sparkles" /></div>
                  <h4 className="mt-5 text-lg font-medium text-white">This app is on the way.</h4>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/45">The workspace will open here in a future CLYRO update. No new window, no redirect.</p>
                  <button onClick={close} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">Back to CLYRO</button>
                </div>
              ) : (
                <>
                  <div className="flex min-h-56 items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-5">
                    {preview ? (
                      <img src={preview} alt="Selected" className="max-h-64 max-w-full rounded-2xl object-contain" />
                    ) : (
                      <button onClick={() => inputRef.current?.click()} className="rounded-2xl border border-dashed border-white/15 px-8 py-10 text-center text-white/55 transition hover:border-white/30 hover:bg-white/[0.03]">
                        <span className="block text-base text-white/80">Choose an image</span>
                        <span className="mt-1 block text-xs">Everything runs in this tab.</span>
                      </button>
                    )}
                  </div>

                  <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={chooseFile} />

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button onClick={() => inputRef.current?.click()} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80">Choose image</button>

                    {info.action === "compression" && (
                      <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/60">
                        Quality {Math.round(quality * 100)}%
                        <input type="range" min="0.3" max="1" step="0.01" value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
                      </label>
                    )}

                    {info.action === "resize" && (
                      <>
                        <label className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55">W <input className="w-20 bg-transparent pl-2 text-white outline-none" type="number" value={width} onChange={(e) => setWidth(e.target.value)} /></label>
                        <label className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55">H <input className="w-20 bg-transparent pl-2 text-white outline-none" type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
                        <button onClick={() => setKeepRatio((v) => !v)} className={`rounded-full border px-3 py-2 text-xs ${keepRatio ? "border-white/25 bg-white/10 text-white" : "border-white/10 text-white/45"}`}>Keep ratio</button>
                      </>
                    )}

                    {info.action === "rotate" && (
                      <label className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white/55">Rotate <select value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="ml-2 bg-transparent text-white outline-none"><option value="90">90°</option><option value="180">180°</option><option value="270">270°</option></select></label>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end gap-2">
                    <button onClick={close} className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60">Close</button>
                    <button disabled={!file || busy} onClick={process} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-40">
                      {busy ? "Working…" : "Download"}
                    </button>
                  </div>
                </>
              )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
