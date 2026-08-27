import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Hand, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { Book } from "../../types";
import { authorBySlug } from "../../data/authors";

const DAY_MS = 1000 * 60 * 60 * 24;

type ArchiveStatus = "new" | "recent" | "established";

const statusStyles: Record<ArchiveStatus, {
  label: string;
  border: string;
  text: string;
  glow: string;
}> = {
  new: {
    label: "NEW",
    border: "border-emerald-300/70",
    text: "text-emerald-300",
    glow: "rgba(110, 231, 183, 0.24)",
  },
  recent: {
    label: "RECENT",
    border: "border-amber-300/70",
    text: "text-amber-200",
    glow: "rgba(252, 211, 77, 0.18)",
  },
  established: {
    label: "ESTABLISHED",
    border: "border-violet-300/55",
    text: "text-violet-200",
    glow: "rgba(167, 139, 250, 0.16)",
  },
};

function ageInDays(addedAt: string) {
  const elapsed = Date.now() - new Date(addedAt).getTime();
  return Math.max(0, Math.floor(elapsed / DAY_MS));
}

function archiveStatus(addedAt: string): ArchiveStatus {
  const age = ageInDays(addedAt);
  if (age <= 7) return "new";
  if (age <= 30) return "recent";
  return "established";
}

function addedLabel(addedAt: string) {
  const age = ageInDays(addedAt);
  if (age === 0) return "Added today";
  if (age === 1) return "Added 1 day ago";
  return `Added ${age} days ago`;
}

function formatAddedDate(addedAt: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(addedAt),
  );
}

export function NewArchiveShowcase({ books }: { books: Book[] }) {
  const archiveBooks = useMemo(
    () => [...books].sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()).slice(0, 8),
    [books],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastWheelAt = useRef(0);

  const shift = (amount: number) => {
    setActiveIndex((current) => (current + amount + archiveBooks.length) % archiveBooks.length);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current) return;
    setDragOffset(event.clientX - pointerStart.current.x);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current) return;
    const distance = event.clientX - pointerStart.current.x;
    if (Math.abs(distance) > 36) shift(distance < 0 ? 1 : -1);
    pointerStart.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastWheelAt.current < 420 || Math.abs(event.deltaY) < 18) return;
    lastWheelAt.current = now;
    shift(event.deltaY > 0 ? 1 : -1);
  };

  if (archiveBooks.length === 0) return null;

  const activeBook = archiveBooks[activeIndex];
  const activeStatus = statusStyles[archiveStatus(activeBook.addedAt)];

  return (
    <section className="overflow-hidden border-y border-border/50 bg-[#050505] py-12 sm:py-16" aria-labelledby="new-archive-title">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-300/90">A living archive</p>
            <h2 id="new-archive-title" className="mt-2 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
              New in the Archive
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ivory-faint">
              Recently added works to the English Literature Library.
            </p>
          </div>
          <p className="max-w-xs text-sm italic leading-relaxed text-ivory-faint sm:text-right">
            Explore the newest additions before they settle into the archive.
          </p>
        </div>

        <div
          className="relative mt-8 min-h-[500px] touch-pan-y select-none overflow-hidden rounded-2xl border border-border/60 bg-[radial-gradient(circle_at_center,rgba(108,78,170,0.16),transparent_48%),#020202] sm:min-h-[650px]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") shift(-1);
            if (event.key === "ArrowRight") shift(1);
          }}
          tabIndex={0}
          role="region"
          aria-label="New books archive spiral. Drag or swipe to explore books."
        >
          <div className="pointer-events-none absolute inset-x-0 top-5 z-[300] flex justify-center px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-ivory-faint/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ivory-faint">
              <Hand size={13} />
              Tap any book for a closer look
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-44 w-[75%] rounded-full bg-violet-500/10 blur-3xl sm:h-64" />
          </div>

          <div className="absolute inset-0 [perspective:1400px]">
            {archiveBooks.map((book, index) => {
              const relative = ((index - activeIndex + archiveBooks.length + Math.floor(archiveBooks.length / 2)) % archiveBooks.length) - Math.floor(archiveBooks.length / 2);
              const angle = (relative / Math.max(1, archiveBooks.length - 1)) * 250;
              const angleRadians = (angle * Math.PI) / 180;
              const depth = Math.cos(angleRadians);
              const frontness = (depth + 1) / 2;
              const x = Math.sin(angleRadians) * 43;
              const y = (1 - depth) * 12 - frontness * 4;
              const z = depth * 260;
              const rotation = Math.sin(angleRadians) * 30;
              const scale = 0.54 + frontness * 0.52;
              const status = statusStyles[archiveStatus(book.addedAt)];
              const author = authorBySlug(book.authorSlug);
              const isActive = index === activeIndex;
              const isCurrentDrag = isDragging;
              const translateX = x + (isActive ? dragOffset / 14 : 0);

              return (
                <article
                  key={book.slug}
                  role="button"
                  tabIndex={0}
                  aria-label={`${book.title} by ${author?.name ?? "unknown author"}`}
                  aria-pressed={isActive}
                  onClick={() => {
                    if (!isDragging) setActiveIndex(index);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setActiveIndex(index);
                  }}
                  className={`absolute left-1/2 top-1/2 w-[clamp(9.5rem,25vw,14rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-[#0b0a0b] shadow-2xl shadow-black/60 outline-none transition-[box-shadow,border-color] duration-500 ${status.border} ${isActive ? "ring-1 ring-ivory/50" : ""}`}
                  style={{
                    zIndex: Math.round((frontness + 0.1) * 100),
                    opacity: 0.22 + frontness * 0.78,
                    transform: `translate3d(calc(-50% + clamp(-440px, ${translateX}vw, 440px)), calc(-50% + ${y}vh), ${z}px) rotateY(${rotation}deg) rotateZ(${rotation * 0.16}deg) scale(${scale})`,
                    transition: isCurrentDrag ? "none" : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms ease, box-shadow 650ms ease",
                    boxShadow: isActive ? `0 0 42px ${status.glow}` : "0 24px 70px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="relative aspect-[2/3] overflow-hidden bg-surface-raised">
                    {book.cover ? (
                      <img
                        src={book.cover.url}
                        alt={book.cover.alt}
                        loading={isActive ? "eager" : "lazy"}
                        className="h-full w-full object-cover opacity-75 mix-blend-luminosity"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-5 text-center font-display text-lg text-ivory-dim">
                        {book.title}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-transparent to-[#080708]/30" />
                    <span className={`absolute left-3 top-3 rounded-full border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] ${status.border} ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                  <div className="space-y-2 p-3.5 sm:p-4">
                    <h3 className="line-clamp-3 font-display text-base font-semibold leading-tight text-ivory sm:text-lg">
                      {book.title}
                    </h3>
                    <p className="truncate text-xs text-ivory-dim">{author?.name}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-ivory-faint">
                      {book.publicationYear} · {book.genre.replace("-", " ")}
                    </p>
                    <p className={`flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider ${status.text}`}>
                      <CalendarDays size={11} />
                      {addedLabel(book.addedAt)}
                    </p>
                    {isActive && (
                      <Link
                        to={`/library/${book.slug}`}
                        className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:text-emerald-300"
                        onClick={(event) => event.stopPropagation()}
                      >
                        View book <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="absolute inset-x-0 bottom-5 z-[300] flex flex-col items-center gap-3 px-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => shift(-1)}
                className="rounded-full border border-border bg-black/50 p-2 text-ivory-faint transition-colors hover:border-emerald-300/60 hover:text-ivory"
                aria-label="Previous book"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory-faint">
                <Sparkles size={12} className="text-emerald-300" />
                Drag or swipe to explore · {activeIndex + 1} / {archiveBooks.length}
              </div>
              <button
                type="button"
                onClick={() => shift(1)}
                className="rounded-full border border-border bg-black/50 p-2 text-ivory-faint transition-colors hover:border-emerald-300/60 hover:text-ivory"
                aria-label="Next book"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <p className={`font-mono text-[9px] uppercase tracking-[0.16em] ${activeStatus.text}`}>
              {activeStatus.label} · Added {formatAddedDate(activeBook.addedAt)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
