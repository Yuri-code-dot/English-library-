import type { Asset } from "../types";

/**
 * Rights-safe generated-style covers used when a licensed/public cover is not
 * available. They keep every syllabus card visually complete without implying
 * that a publisher cover is an official asset.
 */
export const syllabusCoverFallback = (title: string, author: string): Asset => ({
  url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="600" height="900" fill="#171513"/><rect x="38" y="38" width="524" height="824" fill="none" stroke="#9a7040" stroke-width="3"/><text x="70" y="120" fill="#d7b27a" font-family="Georgia,serif" font-size="22" letter-spacing="4">ENGLISH LITERATURE</text><text x="70" y="410" fill="#f1e8d7" font-family="Georgia,serif" font-size="48">${title.replace(/&/g, '&amp;')}</text><text x="70" y="770" fill="#b7ad9d" font-family="Georgia,serif" font-size="24">${author.replace(/&/g, '&amp;')}</text></svg>`)}`,
  alt: `Typographic study cover for ${title} by ${author}`,
  sourceId: "external-copyright",
});
