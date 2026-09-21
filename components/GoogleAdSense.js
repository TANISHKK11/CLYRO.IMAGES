"use client";

import { useEffect } from "react";

export default function GoogleAdSense({ client, slot }) {
  useEffect(() => {
    if (!client || !slot) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense initialization failed:", error);
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <ins
      className="adsbygoogle block min-h-[90px] w-full"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
