import type { Book } from "../../types";
import { syllabusCoverFallback } from "../../data/syllabusCoverFallback";
import { syllabusAuthorBySlug } from "../../data/syllabusAuthors";
import { authorBySlug } from "../../data/authors";

export function SyllabusCover({ book }: { book: Book }) {
  const author = authorBySlug(book.authorSlug) ?? syllabusAuthorBySlug(book.authorSlug);
  const cover = book.cover ?? syllabusCoverFallback(book.title, author?.name ?? "English Literature");
  return <img src={cover.url} alt={cover.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />;
}
