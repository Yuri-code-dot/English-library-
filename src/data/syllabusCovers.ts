import type { Asset } from "../types";

/** Cover artwork placeholders sourced from stable Wikimedia Special:FilePath URLs.
 * Replace/extend individual entries with confirmed public-domain or rights-cleared files as verified.
 */
export const syllabusCovers: Record<string, Asset> = {
  "a-house-for-mr-biswas": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20House%20for%20Mr%20Biswas.jpg", alt: "Cover artwork for A House for Mr Biswas", sourceId: "wikimedia-commons" },
  "things-fall-apart": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Things%20Fall%20Apart.jpg", alt: "Cover artwork for Things Fall Apart", sourceId: "wikimedia-commons" },
  "lady-lazarus": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sylvia%20Plath%20Lady%20Lazarus.jpg", alt: "Cover artwork for Lady Lazarus", sourceId: "wikimedia-commons" },
  "bliss": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Katherine%20Mansfield%20Bliss.jpg", alt: "Cover artwork for Bliss", sourceId: "wikimedia-commons" },
  "a-vindication-of-the-rights-of-woman": { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Vindication%20of%20the%20Rights%20of%20Woman.jpg", alt: "Cover artwork for A Vindication of the Rights of Woman", sourceId: "wikimedia-commons" },
};
