# CLYRO

Free image background remover. Next.js (App Router), React, JavaScript, Tailwind CSS 3.

## Run

```bash
npm install
npm run dev
```

## Where things live

| Want to change…              | Edit                                |
| ---------------------------- | ----------------------------------- |
| Copy, FAQ, limits, tools, ads | `lib/config.js`                     |
| How backgrounds are removed  | `lib/removeBackground.js` (only file) |
| Upload / result lifecycle    | `lib/useBackgroundRemover.js`       |
| Colors, fonts, animations    | `tailwind.config.js`, `app/layout.js` |
| Ad placement                 | `components/AdSlot.js`, `app/page.js` |

## Background removal

`lib/removeBackground.js` has one contract: `(file, { onProgress }) => Promise<Blob>` (a PNG with alpha).
It defaults to `@imgly/background-removal`, which runs in the browser. Review that library's license
before commercial use. A server-API version is included as a comment in the same file.

## Background changer

After a cutout is ready, a glass window inside the result picture lets people pick a color, a gradient
or the color bar. Options live in `lib/backgrounds.js`; downloads are flattened at full resolution
by `lib/exportImage.js`, so the file matches the preview.

## Ads

The site is wired for Google AdSense without hard-coding a publisher ID.

Set these production environment variables after your AdSense account provides them:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT=1234567890
```

The ad script and responsive ad unit activate automatically when both values exist.
Without them, local development shows a quiet reserved placeholder instead.

After you receive your real AdSense publisher ID, add the required `ads.txt` line supplied by Google at `public/ads.txt`.
Do not invent a publisher ID or ads.txt line.

The main ad placement is below the background-removal tool, outside the tool controls, so advertising does not interrupt image processing.

## Before launch

- Add `/privacy`, `/terms` and `/contact` pages (footer links point to them).
- Review the FAQ answers about privacy, watermarks and commercial use so they match your real setup.
