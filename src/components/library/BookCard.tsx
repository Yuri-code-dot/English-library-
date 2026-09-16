import { useState } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../../types";
import { authorBySlug } from "../../data/authors";
import { syllabusAuthorBySlug } from "../../data/syllabusAuthors";

const localCovers: Record<string, string> = {
  "the-father": "/English-library-/covers/the-father.svg",
  "life-of-galileo": "/English-library-/covers/life-of-galileo.svg",
  "waiting-for-godot": "/English-library-/covers/waiting-for-godot.svg",
  "the-birthday-party": "/English-library-/covers/the-birthday-party.svg",
  "the-second-sex-introduction": "/English-library-/covers/the-second-sex-introduction.svg",
  "a-room-of-ones-own": "/English-library-/covers/a-room-of-ones-own.svg",
  "a-literature-of-their-own": "/English-library-/covers/a-literature-of-their-own.svg",
  "in-other-worlds": "/English-library-/covers/in-other-worlds.svg",
};

function CoverFallback({ title, author }: { title: string; author: string }) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#171513] p-4 text-left">
      <div>
        <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-bronze">
          English Literature
        </p>
        <div className="mt-3 h-px w-10 bg-bronze/60" />
      </div>
      <div>
        <p className="font-display text-base font-semibold leading-tight text-ivory">
          {title}
        </p>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-ivory-faint">
          {author}
        </p>
      </div>
    </div>
  );
}

export function BookCard({ book }: { book: Book }) {
  const author = authorBySlug(book.authorSlug) ?? syllabusAuthorBySlug(book.authorSlug);
  const localCover = localCovers[book.slug];
  const [imageFailed, setImageFailed] = useState(false);
  const coverUrl = localCover ?? book.cover?.url;
  const coverAlt = book.cover?.alt ?? `Designed catalogue cover for ${book.title} by ${author?.name ?? "Unknown author"}`;
  const showFallback = !coverUrl || imageFailed;

  return (
    <Link to={`/library/${book.slug}`} className="group w-36 shrink-0 sm:w-44">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md border border-border bg-surface-raised shadow-lg shadow-black/30 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-bronze/50">
        {showFallback ? (
          <CoverFallback title={book.title} author={author?.name ?? "Unknown author"} />
        ) : (
          <img
            src={coverUrl}
            alt={coverAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
          <span className="p-3 font-mono text-[10px] uppercase tracking-wider text-bronze-bright">Read now →</span>
        </div>
      </div>
      <div className="mt-2.5 space-y-0.5">
        <p className="line-clamp-2 font-display text-sm font-semibold leading-snug text-ivory group-hover:text-bronze-bright">
          {book.title}
        </p>
        <p className="truncate text-xs text-ivory-faint">{author?.name}</p>
        <p className="font-mono text-[10px] uppercase tracking-wide text-ivory-faint/70">
          {book.publicationYear} · {book.genre.replace("-", " ")}
        </p>
      </div>
    </Link>
  );
}
