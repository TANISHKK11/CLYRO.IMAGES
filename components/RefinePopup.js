"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load image."));
    img.src = url;
  });
}

export default function RefinePopup({ originalUrl, resultUrl, onApply, onClose }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const originalRef = useRef(null);
  const undoRef = useRef([]);
  const drawingRef = useRef(false);
  const [tool, setTool] = useState("remove");
  const [brushSize, setBrushSize] = useState(48);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function init() {
      const [original, cutout] = await Promise.all([loadImage(originalUrl), loadImage(resultUrl)]);
      if (cancelled) return;
      originalRef.current = original;
      const canvas = canvasRef.current;
      canvas.width = cutout.naturalWidth || cutout.width;
      canvas.height = cutout.naturalHeight || cutout.height;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(cutout, 0, 0, canvas.width, canvas.height);
      setReady(true);
    }
    init().catch(console.error);
    return () => { cancelled = true; };
  }, [originalUrl, resultUrl]);

  function snapshot() {
    const canvas = canvasRef.current;
    undoRef.current.push(canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height));
    if (undoRef.current.length > 8) undoRef.current.shift();
  }

  function undo() {
    const canvas = canvasRef.current;
    const previous = undoRef.current.pop();
    if (!previous) return;
    canvas.getContext("2d").putImageData(previous, 0, 0);
  }

  function pointFromEvent(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvas.width,
      y: ((e.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function paint(e) {
    if (!ready) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = pointFromEvent(e);
    const radius = (brushSize / 2) * (canvas.width / canvas.getBoundingClientRect().width);

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.clip();

    if (tool === "remove") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(originalRef.current, 0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  }

  function start(e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    snapshot();
    drawingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    paint(e);
  }

  function move(e) {
    if (drawingRef.current) paint(e);
  }

  function stop(e) {
    drawingRef.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  }

  function apply() {
    const canvas = canvasRef.current;
    onApply(canvas.toDataURL("image/png"));
  }

  return (
    <div className="absolute inset-0 z-30 flex flex-col rounded-2xl bg-black/85 p-3 backdrop-blur-2xl">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">Refine cutout</h3>
          <p className="text-[11px] text-white/45">Paint over areas to remove or restore them.</p>
        </div>
        <button type="button" onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/70 hover:bg-white/15 hover:text-white">
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>

      <div ref={wrapRef} className="relative min-h-0 flex-1 overflow-hidden rounded-xl checker ring-1 ring-white/10">
        <canvas
          ref={canvasRef}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={stop}
          onPointerCancel={stop}
          className="absolute inset-0 h-full w-full touch-none object-contain"
          style={{ opacity: ready ? 1 : 0 }}
        />
        {!ready && <div className="absolute inset-0 grid place-items-center text-sm text-white/50">Preparing refine tool…</div>}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl">
        <button type="button" onClick={() => setTool("remove")} className={`rounded-full px-3 py-2 text-xs font-medium ${tool === "remove" ? "bg-white text-black" : "bg-white/10 text-white/70 hover:text-white"}`}>✕ Remove</button>
        <button type="button" onClick={() => setTool("restore")} className={`rounded-full px-3 py-2 text-xs font-medium ${tool === "restore" ? "bg-white text-black" : "bg-white/10 text-white/70 hover:text-white"}`}>↺ Restore</button>
        <button type="button" onClick={undo} disabled={!undoRef.current.length} className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/70 hover:text-white disabled:opacity-30">Undo</button>
        <label className="flex min-w-[150px] items-center gap-2 px-2 text-xs text-white/55">
          Size
          <input type="range" min="12" max="180" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} className="flex-1" />
        </label>
        <button type="button" onClick={onClose} className="rounded-full px-3 py-2 text-xs text-white/60 hover:text-white">Cancel</button>
        <button type="button" onClick={apply} disabled={!ready} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black disabled:opacity-50">Apply</button>
      </div>
    </div>
  );
}
