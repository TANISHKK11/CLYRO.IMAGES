export default function ProcessingView({ originalUrl, progress, stage, onCancel }) {
  const pct = progress == null ? null : Math.round(progress * 100);

  return (
    <div className="flex min-h-[380px] flex-col items-center justify-center gap-7 rounded-[1.5rem] bg-white/[0.04] px-6 py-8 text-center sm:min-h-[440px]">
      {/* The uploaded image with a scan line passing over it */}
      <div className="relative overflow-hidden rounded-2xl shadow-lift">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={originalUrl}
          alt="Your uploaded image"
          className="max-h-52 w-auto max-w-full object-contain sm:max-h-64"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-scan border-b-2 border-accent bg-gradient-to-b from-transparent via-transparent to-accent/30"
        />
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold tracking-tight">Removing background...</h2>
        <p className="mt-1.5 text-sm text-fg/55">
          {stage === "loading"
            ? "Getting ready. The first image takes a little longer."
            : "This usually takes a few seconds."}
        </p>
      </div>

      <div className="w-full max-w-xs">
        <div
          role="progressbar"
          aria-label="Background removal progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct ?? undefined}
          className="h-1.5 overflow-hidden rounded-full bg-fg/10"
        >
          {pct == null ? (
            <div className="h-full w-1/3 animate-indeterminate rounded-full bg-accent" />
          ) : (
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
              style={{ width: `${pct}%` }}
            />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onCancel}
        className="rounded-full px-4 py-2 text-sm text-fg/55 transition hover:bg-fg/5 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      >
        Cancel
      </button>
    </div>
  );
}
