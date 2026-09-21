import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/lib/config";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: `${siteConfig.name} – Free image background remover`,
  description:
    "Remove image backgrounds and download a transparent PNG. Free, no signup required.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans text-fg antialiased">
        {siteConfig.ads.enabled ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.ads.clientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}

        {/* Ambient background: two soft, slow-moving washes */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="ambient-a absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] rounded-full bg-white/[0.09] blur-[130px]" />
          <div className="ambient-b absolute -right-[15%] top-[20%] h-[45vmax] w-[45vmax] rounded-full bg-neutral-400/[0.10] blur-[130px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
