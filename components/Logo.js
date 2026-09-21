import { siteConfig } from "@/lib/config";

/** Wordmark + a mark that reads as a subject cut out of its background. */
export default function Logo({ className = "" }) {
  return (
    <a
      href="#top"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="#FFFFFF" />
        <path
          d="M22.5 11.2A7.5 7.5 0 1 0 22.5 20.8"
          fill="none"
          stroke="#000"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="22.6" cy="16" r="2" fill="#000" fillOpacity=".55" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">{siteConfig.name}</span>
    </a>
  );
}
