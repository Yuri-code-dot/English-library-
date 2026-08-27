import frankenstein from "../content/frankenstein.txt?raw";
import prideAndPrejudice from "../content/pride-and-prejudice.txt?raw";
import greatExpectations from "../content/great-expectations.txt?raw";
import hamlet from "../content/hamlet.txt?raw";
import dickinsonPoems from "../content/dickinson-poems.txt?raw";
import mrsDalloway from "../content/mrs-dalloway.txt?raw";

export const readingTexts: Record<string, string> = {
  frankenstein,
  "pride-and-prejudice": prideAndPrejudice,
  "great-expectations": greatExpectations,
  hamlet,
  "dickinson-poems": dickinsonPoems,
  "mrs-dalloway": mrsDalloway,
};

export function hasReadingText(slug: string) {
  return Boolean(readingTexts[slug]);
}
