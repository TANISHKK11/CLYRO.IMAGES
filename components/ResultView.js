"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import BackgroundPopup from "@/components/BackgroundPopup";
import RefinePopup from "@/components/RefinePopup";
import { NONE, backgroundStyle } from "@/lib/backgrounds";
import { renderWithBackground } from "@/lib/exportImage";

export default function ResultView({ originalUrl, resultUrl, fileName, onReset }) {
  const [bg, setBg] = useState(NONE);
  const [popupOpen, setPopupOpen] = useState(true);
  const [refineOpen, setRefineOpen] = useState(false);
  const [editedUrl, setEditedUrl] = useState(resultUrl);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [transform, setTransform] = useState({ x: 50, y: 50, width: 62 });
  const stageRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => setEditedUrl(resultUrl), [resultUrl]);

  const base = (fileName || "image").replace(/\.[^.]+$/, "");
  const downloadName = `${base}-clyro.png`;
  const transparent = bg.type === "none";

  function startDrag(e) {
    if (e.button !== 0) return;
    const stage = stageRef.current?.getBoundingClientRect();
    if (!stage) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, x: transform.x, y: transform.y, stage };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function drag(e) {
    const d = dragRef.current;
    if (!d) return;
    setTransform((t) => ({
      ...t,
      x: Math.max(0, Math.min(100, d.x + ((e.clientX - d.startX) / d.stage.width) * 100)),
      y: Math.max(0, Math.min(100, d.y + ((e.clientY - d.startY) / d.stage.height) * 100)),
    }));
  }

  function stopDrag() { dragRef.current = null; }

  function resize(e) {
    e.stopPropagation();
    const stage = stageRef.current?.getBoundingClientRect();
    if (!stage) return;
    const startWidth = transform.width;
    const startX = e.clientX;
    const onMove = (ev) => {
      const next = startWidth + ((ev.clientX - startX) / stage.width) * 100;
      setTransform((t) => ({ ...t, width: Math.max(12, Math.min(100, next)) }));
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp, { once: true });
  }

  async function download() {
    setBusy(true);
    setError(null);
    try {
      const url = await renderWithBackground(editedUrl, bg, transform);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(url);
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch (err) {
      console.error(err);
      setError("We couldn't prepare that download. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="animate-rise rounded-[1.5rem] bg-white/[0.04] p-3 sm:p-5">
      <div className="grid gap-4 sm:grid-cols-5">
        <figure className="min-w-0 sm:col-span-2">
          <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 sm:h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={originalUrl} alt="Original image" className="h-full w-full object-contain" />
          </div>
          <figcaption className="mt-2.5 text-center text-sm text-white/55">Original</figcaption>
        </figure>

        <figure className="min-w-0 sm:col-span-3">
          <div ref={stageRef} className={`relative h-[430px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-[440px] ${transparent ? "checker" : ""}`} style={backgroundStyle(bg)}>
            <div
              className="absolute cursor-grab touch-none active:cursor-grabbing"
              style={{ left: `${transform.x}%`, top: `${transform.y}%`, width: `${transform.width}%`, transform: "translate(-50%, -50%)" }}
              onPointerDown={startDrag}
              onPointerMove={drag}
              onPointerUp={stopDrag}
              onPointerCancel={stopDrag}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={editedUrl} alt="Image with the background removed" className="block h-auto w-full select-none" draggable="false" />
              <button type="button" aria-label="Resize cutout" onPointerDown={resize} className="absolute -bottom-2 -right-2 h-5 w-5 cursor-nwse-resize rounded-full border-2 border-white bg-black/80 shadow-lg" />
            </div>

            <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
              <button type="button" onClick={() => setRefineOpen(true)} className="rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl hover:bg-black/75">✦ Refine</button>
              <button type="button" onClick={() => setTransform({ x: 50, y: 50, width: 62 })} className="rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs text-white/70 backdrop-blur-xl hover:text-white">Reset position</button>
            </div>

            {refineOpen ? (
              <RefinePopup originalUrl={originalUrl} resultUrl={editedUrl} onApply={(url) => { setEditedUrl(url); setRefineOpen(false); }} onClose={() => setRefineOpen(false)} />
            ) : popupOpen ? (
              <BackgroundPopup value={bg} onChange={setBg} onClose={() => setPopupOpen(false)} />
            ) : (
              <button type="button" onClick={() => setPopupOpen(true)} className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2.5 text-sm font-medium backdrop-blur-xl transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <Icon name="image" className="h-4 w-4" /> Change background
              </button>
            )}
          </div>
          <figcaption className="mt-2.5 text-center text-sm text-white/55">Drag the cutout to move it • drag the corner to resize</figcaption>
        </figure>
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
        <button type="button" onClick={download} disabled={busy} className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-medium text-black shadow-lift transition hover:-translate-y-0.5 hover:bg-neutral-200 disabled:opacity-60">
          <Icon name="download" /> {busy ? "Preparing..." : "Download PNG"}
        </button>
        <button type="button" onClick={onReset} className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
          <Icon name="refresh" className="h-4 w-4" /> Remove another background
        </button>
      </div>

      {error && <p role="alert" className="mt-3 text-center text-sm text-red-300">{error}</p>}
    </div>
  );
}
