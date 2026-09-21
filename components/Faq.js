import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 id="faq-title" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Questions, answered
      </h2>

      <div className="mt-10 border-t border-fg/10">
        {siteConfig.faqs.map((item) => (
          <details key={item.q} className="group border-b border-fg/10">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left text-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon
                name="plus"
                className="h-5 w-5 shrink-0 text-fg/40 transition-transform duration-300 group-open:rotate-45 group-open:text-accent"
              />
            </summary>
            <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-fg/65">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
