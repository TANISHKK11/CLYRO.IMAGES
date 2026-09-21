"use client";

import Icon from "@/components/Icon";

/** Opens the file picker if the drop zone is showing, otherwise just scrolls to the tool. */
function openPicker() {
  const input = document.getElementById("clyro-file-input");
  if (input) input.click();
  else document.getElementById("tool")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Hero() {
  return (
    <div id="top" className="animate-rise">
      <h1 className="font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]">
        Remove backgrounds.
        <br />
        Keep what matters.
      </h1>

      <p className="mt-5 max-w-md text-lg leading-relaxed text-fg/65">
        Create clean transparent images in seconds. Free, simple, and designed for everyday image
        editing.
      </p>

      {/* On small screens the upload card is right below, so the extra button is hidden */}
      <button
        type="button"
        onClick={openPicker}
        className="mt-8 hidden items-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-medium text-black shadow-lift transition hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:inline-flex"
      >
        <Icon name="upload" className="h-5 w-5" />
        Upload an Image
      </button>

      <p className="mt-4 text-sm text-fg/50 lg:mt-5">
        No signup required • PNG output • Fast processing
      </p>
    </div>
  );
}
