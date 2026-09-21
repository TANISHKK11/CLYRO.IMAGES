"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { removeBackground } from "@/lib/removeBackground";
import { validateImage } from "@/lib/validateImage";

const initial = {
  status: "idle", // idle | processing | success | error
  progress: null, // null (unknown) or 0..1
  stage: null, // "loading" | "processing"
  error: null,
  fileName: "",
  originalUrl: null,
  resultUrl: null,
};

/**
 * Owns the whole upload -> process -> result lifecycle.
 * UI components only read state and call `process` / `reset`.
 */
export function useBackgroundRemover() {
  const [state, setState] = useState(initial);
  const urls = useRef([]);
  const runId = useRef(0);

  const revokeAll = useCallback(() => {
    urls.current.forEach((u) => URL.revokeObjectURL(u));
    urls.current = [];
  }, []);

  useEffect(() => revokeAll, [revokeAll]);

  const process = useCallback(
    async (file) => {
      const problem = validateImage(file);
      if (problem) {
        runId.current++;
        revokeAll();
        setState({ ...initial, status: "error", error: problem });
        return;
      }

      revokeAll();
      const id = ++runId.current;
      const originalUrl = URL.createObjectURL(file);
      urls.current.push(originalUrl);

      setState({ ...initial, status: "processing", fileName: file.name, originalUrl });

      try {
        const blob = await removeBackground(file, {
          onProgress: (progress, stage) => {
            if (id === runId.current) setState((s) => ({ ...s, progress, stage }));
          },
        });
        if (id !== runId.current) return; // cancelled

        const resultUrl = URL.createObjectURL(blob);
        urls.current.push(resultUrl);
        setState((s) => ({ ...s, status: "success", progress: 1, resultUrl }));
      } catch (err) {
        if (id !== runId.current) return;
        console.error(err);
        revokeAll();
        setState({
          ...initial,
          status: "error",
          error: "We couldn't remove the background from that image. Try a different file.",
        });
      }
    },
    [revokeAll]
  );

  const reset = useCallback(() => {
    runId.current++;
    revokeAll();
    setState(initial);
  }, [revokeAll]);

  return { ...state, process, reset };
}
