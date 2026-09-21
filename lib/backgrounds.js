/**
 * Background options for the result image.
 *
 * A background value is one of:
 *   { type: "none" }
 *   { type: "solid", color: "#rrggbb" }
 *   { type: "gradient", id, angle, stops: ["#..", "#.."] }
 *   { type: "image", url, name }
 *
 * The same value drives both the on-screen preview (CSS) and the
 * downloaded file (canvas), so what you see is what you get.
 */

export const NONE = { type: "none" };

export const solids = [
  { name: "White", color: "#ffffff" },
  { name: "Light gray", color: "#e5e5e5" },
  { name: "Gray", color: "#737373" },
  { name: "Black", color: "#000000" },
  { name: "Red", color: "#ef4444" },
  { name: "Orange", color: "#f97316" },
  { name: "Yellow", color: "#facc15" },
  { name: "Green", color: "#22c55e" },
  { name: "Blue", color: "#3b82f6" },
  { name: "Violet", color: "#8b5cf6" },
  { name: "Pink", color: "#ec4899" },
];

export const gradients = [
  { id: "graphite", name: "Graphite", angle: 160, stops: ["#0a0a0a", "#525252"] },
  { id: "silver", name: "Silver", angle: 160, stops: ["#ffffff", "#a3a3a3"] },
  { id: "sunset", name: "Sunset", angle: 135, stops: ["#f97316", "#ec4899"] },
  { id: "ocean", name: "Ocean", angle: 135, stops: ["#06b6d4", "#3b82f6"] },
  { id: "aurora", name: "Aurora", angle: 135, stops: ["#22c55e", "#3b82f6"] },
  { id: "dusk", name: "Dusk", angle: 135, stops: ["#8b5cf6", "#ec4899"] },
  { id: "peach", name: "Peach", angle: 135, stops: ["#fde68a", "#fca5a5"] },
  { id: "midnight", name: "Midnight", angle: 135, stops: ["#1e1b4b", "#4338ca"] },
];

export function gradientCss(g) {
  return `linear-gradient(${g.angle}deg, ${g.stops.join(", ")})`;
}

/** Inline style for previewing a background in the UI. */
export function backgroundStyle(bg) {
  if (bg.type === "solid") return { background: bg.color };
  if (bg.type === "gradient") return { backgroundImage: gradientCss(bg) };
  if (bg.type === "image") {
    return {
      backgroundImage: `url("${bg.url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  return undefined;
}

export function isSameBackground(a, b) {
  if (a.type !== b.type) return false;
  if (a.type === "solid") return a.color.toLowerCase() === b.color.toLowerCase();
  if (a.type === "gradient") return a.id === b.id;
  return true;
}

/** Paints the background onto a canvas, matching CSS linear-gradient angle rules. */
export function drawBackground(ctx, w, h, bg) {
  if (bg.type === "solid") {
    ctx.fillStyle = bg.color;
    ctx.fillRect(0, 0, w, h);
  } else if (bg.type === "gradient") {
    const rad = (bg.angle * Math.PI) / 180;
    const dx = Math.sin(rad);
    const dy = -Math.cos(rad);
    const len = Math.abs(w * dx) + Math.abs(h * dy);
    const cx = w / 2;
    const cy = h / 2;
    const grad = ctx.createLinearGradient(
      cx - (dx * len) / 2,
      cy - (dy * len) / 2,
      cx + (dx * len) / 2,
      cy + (dy * len) / 2
    );
    bg.stops.forEach((color, i) => grad.addColorStop(i / (bg.stops.length - 1), color));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }
}

export function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const hex = (x) => Math.round(x * 255).toString(16).padStart(2, "0");
  return `#${hex(f(0))}${hex(f(8))}${hex(f(4))}`;
}
