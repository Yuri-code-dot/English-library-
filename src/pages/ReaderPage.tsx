import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, ExternalLink, Minus, Plus, Sparkles } from "lucide-react";
import { bookBySlug } from "../data/books";
import { syllabusBookBySlug } from "../data/syllabusBooks";
import { authorBySlug } from "../data/authors";
import { syllabusAuthorBySlug } from "../data/syllabusAuthors";
import { readingTexts } from "../data/readingTexts";
import { EmptyState } from "../components/ui/Primitives";

const HEADER_MARKERS = [
  "THE PROJECT GUTENBERG EBOOK",
  "*** START OF THE PROJECT GUTENBERG EBOOK",
  "*** END OF THE PROJECT GUTENBERG EBOOK",
];

function cleanText(raw: string) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((line) => line.includes("*** START OF THE PROJECT GUTENBERG EBOOK"));
  const end = lines.findIndex((line) => line.includes("*** END OF THE PROJECT GUTENBERG EBOOK"));
  const content = lines.slice(start >= 0 ? start + 1 : 0, end >= 0 ? end : lines.length);

  return content
    .join("\n")
    .replace(/\uFEFF/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isHeading(block: string) {
  const trimmed = block.trim();
  if (!trimmed || trimmed.length > 90 || trimmed.includes("\n")) return false;
  if (HEADER_MARKERS.some((marker) => trimmed.toUpperCase().includes(marker))) return false;
  return /^(chapter|book|part|act|scene|contents|preface|introduction|poem|series|volume|the [ivxlcdm]+\b)/i.test(trimmed);
}

function formatBlock(block: string) {
  return block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");
}

export function ReaderPage() {
  const { slug } = useParams();
  const book = slug ? bookBySlug(slug) ?? syllabusBookBySlug(slug) : undefined;
  const author = book ? authorBySlug(book.authorSlug) ?? syllabusAuthorBySlug(book.authorSlug) : undefined;
  const rawText = slug ? readingTexts[slug] : undefined;
  const [fontSize, setFontSize] = useState(18);
  const [showContents, setShowContents] = useState(true);
  const [mode, setMode] = useState<"original" | "study">("original");
  const [progress, setProgress] = useState(0);

  const blocks = useMemo(() => {
    if (!rawText) return [];
    return cleanText(rawText)
      .split(/\n\s*\n/)
      .map(formatBlock)
      .filter(Boolean);
  }, [rawText]);

  const headings = useMemo(
    () => blocks.flatMap((block, index) => (isHeading(block) ? [{ block, index }] : [])),
    [blocks],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode, blocks.length]);

  if (!book || !rawText) {
    return (
      <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 lg:px-10">
        <EmptyState
          title="This reading room is not open yet."
          message="We could not find a verified full-text edition for this work in the library."
        />
      </div>
    );
  }

  const textStyle = { fontSize: `${fontSize}px`, lineHeight: 1.85 };

  return (
    <div className="min-h-screen bg-ink">
      <div className="fixed left-0 right-0 top-0 z-[60] h-0.5 bg-border/30">
        <div className="h-full bg-bronze transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <header className="border-b border-border/70 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <Link
            to={`/library/${book.slug}`}
            className="inline-flex items-center gap-2 text-sm text-ivory-dim transition-colors hover:text-bronze-bright"
          >
            <ArrowLeft size={16} />
            Back to the work
          </Link>
          <Link to="/" className="hidden items-center gap-2 font-display text-sm font-semibold text-ivory sm:flex">
            <BookOpen size={17} className="text-bronze" />
            English Literature Library
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <header>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze-bright">Reading room</p>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ivory sm:text-5xl">{book.title}</h1>
            <p className="mt-3 text-sm text-ivory-faint">
              {author?.name} · {book.publicationYear} · {Math.round(progress)}% read
            </p>
          </header>

          <div className="sticky top-16 z-40 mt-7 rounded-xl border border-border bg-surface/95 p-2 shadow-xl shadow-black/20 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-1 rounded-lg bg-ink/50 p-1">
              <button
                type="button"
                onClick={() => setMode("original")}
                className={`rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
                  mode === "original" ? "bg-surface-raised text-ivory shadow-sm" : "text-ivory-faint hover:text-ivory"
                }`}
              >
                Original Text
              </button>
              <button
                type="button"
                onClick={() => setMode("study")}
                className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
                  mode === "study" ? "bg-surface-raised text-bronze-bright shadow-sm" : "text-ivory-faint hover:text-ivory"
                }`}
              >
                <Sparkles size={14} />
                Study Edition
              </button>
            </div>

            {mode === "original" && (
              <div className="mt-2 flex flex-wrap items-center gap-2 px-1 pb-1 pt-1">
                <button
                  type="button"
                  onClick={() => setShowContents((visible) => !visible)}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-ivory-dim transition-colors hover:border-bronze/50 hover:text-ivory"
                  aria-expanded={showContents}
                >
                  {showContents ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  Contents {headings.length > 0 ? `(${headings.length})` : ""}
                </button>
                <div className="ml-auto flex items-center gap-1">
                  <span className="mr-1 hidden font-mono text-[10px] uppercase tracking-wider text-ivory-faint sm:inline">Text size</span>
                  <button
                    type="button"
                    onClick={() => setFontSize((size) => Math.max(15, size - 1))}
                    className="rounded-md border border-border p-2 text-ivory-dim transition-colors hover:border-bronze/50 hover:text-ivory"
                    aria-label="Decrease text size"
                  >
                    <Minus size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize((size) => Math.min(24, size + 1))}
                    className="rounded-md border border-border p-2 text-ivory-dim transition-colors hover:border-bronze/50 hover:text-ivory"
                    aria-label="Increase text size"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {mode === "original" ? (
            <>
              {showContents && headings.length > 0 && (
                <nav className="mt-4 rounded-xl border border-border bg-surface p-4" aria-label="Table of contents">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">In this edition</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {headings.map(({ block, index }) => (
                      <a
                        key={`${block}-${index}`}
                        href={`#reading-block-${index}`}
                        className="truncate text-sm text-ivory-dim transition-colors hover:text-bronze-bright"
                      >
                        {block}
                      </a>
                    ))}
                  </div>
                </nav>
              )}

              <article className="mt-10 border-t border-border/70 pt-8" style={textStyle}>
                {blocks.map((block, index) => {
                  const heading = isHeading(block);
                  return heading ? (
                    <h2
                      id={`reading-block-${index}`}
                      key={`${index}-${block}`}
                      className="mb-5 mt-12 scroll-mt-36 font-display text-2xl font-semibold leading-tight text-ivory first:mt-0 sm:text-3xl"
                    >
                      {block}
                    </h2>
                  ) : (
                    <p key={`${index}-${block.slice(0, 20)}`} className="mb-6 max-w-3xl text-ivory-dim">
                      {block}
                    </p>
                  );
                })}
              </article>
            </>
          ) : (
            <section className="mt-8 space-y-6">
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">Study Edition</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-ivory">Read with context</h2>
                <p className="mt-3 text-sm leading-7 text-ivory-faint">
                  This layer is designed for study rather than replacing the original text. Use the original edition for the work itself, then return here for catalogue-level context and revision points.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <section className="rounded-xl border border-border bg-surface p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">About the text</p>
                  <p className="mt-3 text-sm leading-7 text-ivory-dim">{book.description}</p>
                </section>
                <section className="rounded-xl border border-border bg-surface p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">Key themes</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {book.themes.map((theme) => (
                      <span key={theme} className="rounded-full border border-border bg-surface-raised px-3 py-1.5 text-xs text-ivory-dim">
                        {theme}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <Link
                to="/scholars-trial"
                className="group block rounded-xl border border-bronze/30 bg-surface p-6 transition-colors hover:border-bronze/60 hover:bg-surface-raised"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze">Next step</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-ivory group-hover:text-bronze-bright">Take The Scholar's Trial</h2>
                <p className="mt-2 text-sm leading-6 text-ivory-faint">Test your understanding after reading. Practice questions are kept separate from verified university papers.</p>
              </Link>
            </section>
          )}

          <footer className="mt-12 border-t border-border/70 pt-6 text-sm text-ivory-faint">
            <p>
              This in-site edition is reproduced from Project Gutenberg as a public-domain text. For edition details and
              the original source, visit the external record.
            </p>
            {book.readingUrl && (
              <a
                href={book.readingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-bronze-bright hover:underline"
              >
                View original source <ExternalLink size={13} />
              </a>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
}
