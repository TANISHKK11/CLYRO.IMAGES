import { siteConfig } from "@/lib/config";

/**
 * Returns a human-readable problem string, or null if the file is fine.
 */
export function validateImage(file) {
  const { accept, maxSizeMB } = siteConfig.upload;

  if (!file) return "No file was selected.";

  if (!accept[file.type]) {
    const list = new Intl.ListFormat("en", { type: "disjunction" }).format(Object.values(accept));
    return `That file type isn't supported. Upload a ${list} image.`;
  }

  if (file.size > maxSizeMB * 1024 * 1024) {
    return `That image is larger than ${maxSizeMB} MB. Choose a smaller file.`;
  }

  return null;
}
