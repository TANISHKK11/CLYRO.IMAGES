import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

export default function UseCases() {
  return (
    <section aria-labelledby="use-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 id="use-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Made for everyday images
      </h2>

      {/* 6-col grid: two wide tiles on top, three narrower below */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {siteConfig.useCases.map((u, i) => (
          <li
            key={u.title}
            className={`flex gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 ring-1 ring-white/[0.03] transition duration-300 hover:bg-white/[0.09] hover:shadow-lift ${
              i < 2 ? "lg:col-span-3" : "lg:col-span-2"
            } ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-black">
              <Icon name={u.icon} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{u.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-fg/60">{u.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
