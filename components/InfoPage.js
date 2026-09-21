import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export default function InfoPage({ title, eyebrow, children }) {
  return (
    <>
      <header className="border-b border-fg/10 bg-paper/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <a
            href="/"
            className="rounded-full px-4 py-2 text-sm text-fg/70 transition-colors hover:bg-fg/5 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to editor
          </a>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-fg/50">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <div className="glass mt-10 rounded-3xl p-6 text-base leading-7 text-fg/70 shadow-card sm:p-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
