import GoogleAdSense from "@/components/GoogleAdSense";
import { siteConfig } from "@/lib/config";

/**
 * Responsive Google AdSense slot.
 *
 * The ad is only rendered when both environment variables are present:
 * NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
 * NEXT_PUBLIC_ADSENSE_SLOT=1234567890
 *
 * This keeps local development clean and prevents fake/placeholder ad code
 * from being shipped before the publisher account is ready.
 */
export default function AdSlot({ className = "" }) {
  const { enabled, label, showPlaceholder, clientId, slotId } = siteConfig.ads;

  return (
    <aside
      aria-label={label}
      className={`mx-auto w-full max-w-[728px] ${className}`}
    >
      <p className="mb-1.5 text-center text-[11px] text-fg/35">{label}</p>
      <div
        className={`flex min-h-[100px] w-full items-center justify-center overflow-hidden rounded-2xl md:min-h-[90px] ${
          enabled
            ? "bg-transparent"
            : "border border-dashed border-fg/10 bg-fg/[0.02]"
        }`}
      >
        {enabled ? (
          <GoogleAdSense client={clientId} slot={slotId} />
        ) : showPlaceholder ? (
          <span className="text-xs text-fg/30">Ad space</span>
        ) : null}
      </div>
    </aside>
  );
}
