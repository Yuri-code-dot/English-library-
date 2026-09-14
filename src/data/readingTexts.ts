import frankenstein from "../content/frankenstein.txt?raw";
import prideAndPrejudice from "../content/pride-and-prejudice.txt?raw";
import greatExpectations from "../content/great-expectations.txt?raw";
import hamlet from "../content/hamlet.txt?raw";
import dickinsonPoems from "../content/dickinson-poems.txt?raw";
import mrsDalloway from "../content/mrs-dalloway.txt?raw";
import theFather from "../content/the-father.txt?raw";
import thePurloinedLetter from "../content/the-purloined-letter.txt?raw";
import upFromSlavery from "../content/up-from-slavery.txt?raw";
import waltWhitmanPoems from "../content/walt-whitman-poems.txt?raw";
import dickinsonSemesterV from "../content/dickinson-semester-v.txt?raw";

export const readingTexts: Record<string, string> = {
  frankenstein,
  "pride-and-prejudice": prideAndPrejudice,
  "great-expectations": greatExpectations,
  hamlet,
  "dickinson-poems": dickinsonPoems,
  "mrs-dalloway": mrsDalloway,
  "the-father": theFather,
  "the-purloined-letter": thePurloinedLetter,
  "up-from-slavery-chapter-one": upFromSlavery,
  "o-captain-my-captain": waltWhitmanPoems,
  "this-was-a-poet": dickinsonSemesterV,
  "i-heard-a-fly-buzz": dickinsonSemesterV,
};

export function hasReadingText(slug: string) {
  return Boolean(readingTexts[slug]);
}
