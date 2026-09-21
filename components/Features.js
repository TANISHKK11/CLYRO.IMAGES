import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

export default function Features() {
  return (
    <section aria-labelledby="features-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 id="features-title" className="sr-only">
        Why use {siteConfig.name}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.features.map((f) => (
          <li
            key={f.title}
            className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09] hover:shadow-lift"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-white group-hover:text-black">
              <Icon name={f.icon} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-fg/60">{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
