import { siteConfig } from "@/lib/config";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8"
    >
      <h2 id="how-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Three steps, no detours
      </h2>

      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {siteConfig.steps.map((step, i) => (
          <li key={step.title} className="border-t border-fg/10 pt-6">
            <span className="font-display text-5xl font-semibold tracking-tight text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-1.5 max-w-xs text-[15px] leading-relaxed text-fg/60">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
