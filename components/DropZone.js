"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

const { accept, maxSizeMB } = siteConfig.upload;
const formats = Object.values(accept).join(", ");

export default function DropZone({ onFile, error }) {
  const [dragging, setDragging] = useState(false);

  const pick = (files) => {
    const file = files && files[0];
    if (file) onFile(file);
  };

  const onDrag = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  return (
    <div>
      {/* The real input is visually hidden but keyboard-focusable; the label is the target. */}
      <input
        id="clyro-file-input"
        type="file"
        accept={Object.keys(accept).join(",")}
        className="peer sr-only"
        onChange={(e) => {
          pick(e.target.files);
          e.target.value = "";
        }}
      />

      <label
        htmlFor="clyro-file-input"
        onDragEnter={onDrag}
        onDragOver={onDrag}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          pick(e.dataTransfer.files);
        }}
        className={`group relative flex min-h-[380px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[1.5rem] px-6 py-10 text-center transition duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-white sm:min-h-[440px] ${
          dragging ? "scale-[0.985] bg-accent-soft" : "bg-white/[0.04] hover:bg-white/[0.08]"
        }`}
      >
        {/* Crop marks: they pull in when a file is dragged over */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute transition-all duration-300 ${
            dragging ? "inset-3" : "inset-5 group-hover:inset-4"
          }`}
        >
          {[
            "left-0 top-0 border-l-2 border-t-2 rounded-tl-xl",
            "right-0 top-0 border-r-2 border-t-2 rounded-tr-xl",
            "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl",
            "bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute h-7 w-7 transition-colors duration-300 ${pos} ${
                dragging ? "border-accent" : "border-fg/20 group-hover:border-accent/70"
              }`}
            />
          ))}
        </span>

        <span
          className={`mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 ${
            dragging ? "-translate-y-1.5" : ""
          }`}
        >
          <Icon name="upload" className="h-7 w-7" />
        </span>

        <span className="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
          {dragging ? "Release to upload" : "Drop your image here"}
        </span>
        <span className="text-base text-fg/55">or click to browse</span>

        <span className="mt-5 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-base font-medium text-black shadow-lift transition group-hover:bg-neutral-200">
          Choose an image
        </span>

        <span className="mt-5 text-sm text-fg/45">
          {formats} • up to {maxSizeMB} MB
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="mt-3 flex items-start gap-2.5 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
