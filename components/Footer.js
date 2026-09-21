import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/config";

function LinkList({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-medium">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-fg/60 transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-fg/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg/55">
            Free background removal and simple image tools.
          </p>
        </div>
        <LinkList title="Product" links={siteConfig.footer.product} />
        <LinkList title="Company" links={siteConfig.footer.company} />
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-10 text-sm text-fg/45 sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
