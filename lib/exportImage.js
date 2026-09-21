import { drawBackground } from "@/lib/backgrounds";

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load the image."));
    img.src = url;
  });
}

function drawCover(ctx, img, w, h) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
}

export async function renderWithBackground(imageUrl, bg, transform = { x: 50, y: 50, width: 100 }) {
  const img = await loadImage(imageUrl);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");

  if (bg.type === "image") {
    const background = await loadImage(bg.url);
    drawCover(ctx, background, canvas.width, canvas.height);
  } else {
    drawBackground(ctx, canvas.width, canvas.height, bg);
  }

  const targetWidth = canvas.width * (transform.width / 100);
  const targetHeight = targetWidth * (img.naturalHeight / img.naturalWidth);
  const x = canvas.width * (transform.x / 100) - targetWidth / 2;
  const y = canvas.height * (transform.y / 100) - targetHeight / 2;
  ctx.drawImage(img, x, y, targetWidth, targetHeight);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Export failed."))),
      "image/png"
    );
  });
}
