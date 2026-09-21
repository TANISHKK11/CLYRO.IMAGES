"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-fg/5 bg-paper/75 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-self-end gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-deep">
            Free
          </span>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-fg/80 hover:bg-fg/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-fg/5 px-5 py-2 md:hidden">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base text-fg/80 hover:bg-fg/5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
