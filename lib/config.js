/**
 * Everything editable about the site lives here: copy, limits, ad settings, links.
 * Icon values are keys from components/Icon.js.
 */
export const siteConfig = {
  name: "CLYRO.IMAGES",
  contactEmail: "contacts-clyroimages@gmail.com",

  upload: {
    maxSizeMB: 10,
    // MIME type -> label shown to people
    accept: {
      "image/jpeg": "JPG",
      "image/png": "PNG",
      "image/webp": "WebP",
    },
  },

  /**
   * Advertising. One quiet slot sits below the tool, never inside it and never
   * while an image is processing. Set `enabled: true` and render your ad
   * network's code as children of <AdSlot /> in app/page.js.
   */
  ads: {
    // Ads activate automatically when both values are supplied in production:
    // NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
    // NEXT_PUBLIC_ADSENSE_SLOT=1234567890
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
    slotId: process.env.NEXT_PUBLIC_ADSENSE_SLOT || "",
    enabled: Boolean(
      process.env.NEXT_PUBLIC_ADSENSE_CLIENT &&
      process.env.NEXT_PUBLIC_ADSENSE_SLOT
    ),
    label: "Advertisement",
    // Keep the reserved placeholder during setup so the layout does not jump.
    showPlaceholder: true,
  },

  nav: [
    { label: "Background Remover", href: "#tool" },
    { label: "Image Tools", href: "#tools" },
    { label: "How It Works", href: "#how-it-works" },
  ],

  features: [
    { icon: "circle-check", title: "Free to use", text: "Remove as many backgrounds as you need at no cost." },
    { icon: "user-slash", title: "No signup required", text: "Open the page, add an image, download the result." },
    { icon: "transparent", title: "Transparent PNG", text: "Keep it transparent, or swap in a color or gradient before you download." },
    { icon: "bolt", title: "Fast processing", text: "Most images are ready in a few seconds." },
  ],

  steps: [
    { title: "Upload", text: "Drop in a JPG, PNG or WebP image." },
    { title: "Remove", text: "CLYRO cuts out the background automatically." },
    { title: "Download", text: "Pick a new background if you like, then save your PNG." },
  ],

  useCases: [
    { icon: "bag", title: "Product photos", text: "Isolate products on a clean, consistent backdrop for listings and catalogs." },
    { icon: "user", title: "Profile pictures", text: "Lift yourself out of a busy photo and drop in a color that suits you." },
    { icon: "hexagon", title: "Logos", text: "Strip the white box from a logo so it sits cleanly on any page." },
    { icon: "share", title: "Social media", text: "Build posts, thumbnails and stories around a sharp cutout." },
    { icon: "store", title: "Online stores", text: "Keep every item in your shop looking uniform without a studio." },
  ],
  
   tools: [
    { icon: "transparent", name: "Batch Background Remover", launched: true },
    { icon: "compress", name: "Image Compressor", launched: true },
    { icon: "resize", name: "Image Resizer", launched: true },
    { icon: "swap", name: "JPG to PNG", launched: true },
    { icon: "swap", name: "PNG to JPG", launched: true },
    { icon: "image", name: "WebP Converter", launched: true },
  ],


  // Keep answers accurate for your real deployment. Edit freely.
  faqs: [
    {
      q: "Is the background remover free?",
      a: "Yes. You can remove backgrounds and download the results without paying.",
    },
    {
      q: "What image formats are supported?",
      a: "You can upload JPG, PNG and WebP images up to 10 MB. Results are downloaded as PNG files with a transparent background.",
    },
    {
      q: "Does the downloaded image have a watermark?",
      a: "No. Your PNG is exactly the cutout you see in the preview.",
    },
    {
      q: "Do I need an account?",
      a: "No. There is nothing to sign up for. Add an image and download the result.",
    },
    {
      q: "What happens to my uploaded image?",
      a: "Your image is processed to create the transparent result. For details on how images are handled and how long they are kept, read our Privacy page.",
    },
    {
      q: "Can I use the result commercially?",
      a: "You are responsible for having the rights to any image you upload. See our Terms for how results may be used.",
    },
  ],

 

  footer: {
    product: [
      { label: "Background Remover", href: "#tool" },
      { label: "Image Tools", href: "#tools" },
    ],
    company: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
