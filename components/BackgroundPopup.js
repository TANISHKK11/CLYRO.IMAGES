"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import {
  NONE,
  solids,
  gradients,
  gradientCss,
  hslToHex,
  isSameBackground,
} from "@/lib/backgrounds";

function Swatch({ label, selected, onClick, style, className = "" }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={selected}
      onClick={onClick}
      style={style}
      className={`h-8 w-8 shrink-0 rounded-full transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        selected ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "ring-1 ring-white/25"
      } ${className}`}
    />
  );
}

function Row({ label, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-[58px] shrink-0 text-[11px] text-white/50">{label}</span>
      <div className="no-scrollbar -my-1 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-1 py-1.5">
        {children}
      </div>
    </div>
  );
}

/**
 * Floating glass window that sits inside the result picture.
 * Controlled: parent owns the background value.
 */
export default function BackgroundPopup({ value, onChange, onClose }) {
  const [hue, setHue] = useState(220);

  return (
    <div
      role="group"
      aria-label="Change background"
      className="absolute inset-x-2 bottom-2 z-10 rounded-2xl border border-white/15 bg-black/60 p-3.5 shadow-lift backdrop-blur-2xl animate-rise"
    >
      <div className="mb-1.5 flex items-center justify-between">
        <h3 className="text-sm font-medium">Change background</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close background options"
          className="grid h-7 w-7 place-items-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>

      <Row label="Colors">
        <Swatch
          label="Transparent"
          selected={isSameBackground(value, NONE)}
          onClick={() => onChange(NONE)}
          className="checker"
        />
        {solids.map((s) => {
          const bg = { type: "solid", color: s.color };
          return (
            <Swatch
              key={s.color}
              label={s.name}
              selected={isSameBackground(value, bg)}
              onClick={() => onChange(bg)}
              style={{ background: s.color }}
            />
          );
        })}
        <label
          title="Pick any color"
          className="relative h-8 w-8 shrink-0 cursor-pointer overflow-hidden rounded-full ring-1 ring-white/25 transition hover:scale-110 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-white"
          style={{
            background: "conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)",
          }}
        >
          <span className="sr-only">Pick any color</span>
          <input
            type="color"
            value={value.type === "solid" ? value.color : "#3b82f6"}
            onChange={(e) => onChange({ type: "solid", color: e.target.value })}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </label>
      </Row>

      <Row label="Photo">
        {value.type === "image" ? (
          <Swatch
            label="Uploaded background"
            selected
            onClick={() => {}}
            style={{ backgroundImage: `url("${value.url}")`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        ) : null}
        <label
          title="Upload a background photo"
          className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 text-[11px] text-white/75 transition hover:bg-white/15 hover:text-white"
        >
          <Icon name="image" className="h-3.5 w-3.5" />
          Upload photo
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const url = URL.createObjectURL(file);
              onChange({ type: "image", url, name: file.name });
              e.target.value = "";
            }}
          />
        </label>
        {value.type === "image" ? (
          <button type="button" onClick={() => onChange(NONE)} className="rounded-full px-3 py-2 text-[11px] text-white/50 hover:bg-white/10 hover:text-white">Remove</button>
        ) : null}
      </Row>

      <Row label="Gradients">
        {gradients.map((g) => {
          const bg = { type: "gradient", ...g };
          return (
            <Swatch
              key={g.id}
              label={g.name}
              selected={isSameBackground(value, bg)}
              onClick={() => onChange(bg)}
              style={{ backgroundImage: gradientCss(g) }}
            />
          );
        })}
      </Row>

      <div className="mt-1.5 flex items-center gap-3">
        <span className="w-[58px] shrink-0 text-[11px] text-white/50">Color bar</span>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          aria-label="Color bar: choose a hue"
          className="hue-range flex-1"
          onChange={(e) => {
            const h = Number(e.target.value);
            setHue(h);
            onChange({ type: "solid", color: hslToHex(h, 85, 55) });
          }}
        />
      </div>
    </div>
  );
}
