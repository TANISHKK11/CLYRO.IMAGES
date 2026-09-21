/**
 * THE ONLY FILE THAT KNOWS HOW BACKGROUNDS ARE REMOVED.
 *
 * Contract:
 *   removeBackground(file: File, options?: { onProgress?: (fraction, stage) => void }) => Promise<Blob>
 *
 *   - `fraction` is 0..1
 *   - `stage` is "loading" (fetching the model, first run only) or "processing"
 *   - resolves with a transparent PNG Blob
 *
 * The default implementation runs entirely in the browser using
 * @imgly/background-removal. Check that library's license terms before using it
 * commercially. To use your own backend instead, replace the body with the
 * server example at the bottom of this file. Nothing else in the UI changes.
 */
export async function removeBackground(file, { onProgress } = {}) {
  const { removeBackground: run } = await import("@imgly/background-removal");

  // Model files arrive as several downloads; sum them for one smooth number.
  const downloads = new Map();

  return run(file, {
    output: { format: "image/png" },
    progress: (key, current, total) => {
      if (!onProgress || !total) return;

      if (key.startsWith("fetch:")) {
        downloads.set(key, { current, total });
        let c = 0;
        let t = 0;
        downloads.forEach((d) => {
          c += d.current;
          t += d.total;
        });
        onProgress(0.8 * (c / t), "loading");
      } else {
        onProgress(0.8 + 0.2 * (current / total), "processing");
      }
    },
  });
}

/* ---------------------------------------------------------------------------
 * Server-side alternative (POST to your own API route):
 *
 * export async function removeBackground(file, { onProgress } = {}) {
 *   const body = new FormData();
 *   body.append("image", file);
 *   const res = await fetch("/api/remove-background", { method: "POST", body });
 *   if (!res.ok) throw new Error("Background removal failed");
 *   onProgress?.(1, "processing");
 *   return res.blob(); // must be a PNG with alpha
 * }
 * ------------------------------------------------------------------------- */
