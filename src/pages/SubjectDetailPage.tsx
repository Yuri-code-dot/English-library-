import { Link } from "react-router-dom";
import { subjectBySlug } from "../data/subjects";
import { books } from "../data/books";
import { syllabusBooks } from "../data/syllabusBooks";
import { authors } from "../data/authors";
import { syllabusAuthors } from "../data/syllabusAuthors";
import { BookCard } from "../components/library/BookCard";
import { EmptyState } from "../components/ui/Primitives";

const allBooks = [...books, ...syllabusBooks];
const allAuthors = [...authors, ...syllabusAuthors];

export function SubjectDetailPage() {
  const { slug } = useParams();
  const subject = slug ? subjectBySlug(slug) : undefined;

  if (!subject) {
    return (
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-10">
        <EmptyState title="Subject not found." message="This paper isn't in the curriculum catalogue yet." />
      </div>
    );
  }

  const subjectBooks = allBooks.filter((b) => subject.bookSlugs.includes(b.slug));
  const subjectAuthors = allAuthors.filter((a) => subject.authorSlugs.includes(a.slug));
  const linkedAuthorNames = new Set(subjectAuthors.map((a) => a.name));
  const displayAuthorNames = (subject.authorNames ?? []).filter((name) => !linkedAuthorNames.has(name));

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-10">
      <Link to="/curriculum" className="text-xs font-mono uppercase tracking-wide text-ivory-faint hover:text-bronze-bright">
        ← Curriculum
      </Link>

      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-bronze">
        {subject.paperCode} · Semester {subject.semester}
      </p>
      <h1 className="mt-1 font-display text-3xl font-bold text-ivory sm:text-4xl">{subject.name}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-dim">{subject.description}</p>
      {subject.credits && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-bronze">
          {subject.credits} Credits
        </p>
      )}

      {subject.modules && subject.modules.length > 0 && <TextListSection title="Modules / Topics" items={subject.modules} />}

      <Section title="Primary Texts">
        {subject.primaryTexts && subject.primaryTexts.length > 0 && (
          <ul className="mb-6 space-y-2 text-sm text-ivory-dim">
            {subject.primaryTexts.map((text) => (
              <li key={text} className="border-l-2 border-bronze/40 pl-3">
                {text}
              </li>
            ))}
          </ul>
        )}
        {subjectBooks.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
            {subjectBooks.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        ) : !subject.primaryTexts?.length ? (
          <EmptyState title="No texts catalogued yet." message="Primary texts for this paper will appear here as they're added." />
        ) : null}
      </Section>

      {(subjectAuthors.length > 0 || displayAuthorNames.length > 0) && (
        <Section title="Authors">
          <div className="flex flex-wrap gap-3">
            {subjectAuthors.map((a) => (
              <Link
                key={a.slug}
                to={`/authors/${a.slug}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-bronze/50"
              >
                {a.portrait && (
                  <img src={a.portrait.url} alt="" className="h-10 w-10 rounded-full object-cover" />
                )}
                <span className="text-sm font-medium text-ivory">{a.name}</span>
              </Link>
            ))}
            {displayAuthorNames.map((name) => (
              <span key={name} className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ivory-dim">
                {name}
              </span>
            ))}
          </div>
        </Section>
      )}

      {subject.poetry && subject.poetry.length > 0 && <TextListSection title="Poetry" items={subject.poetry} />}
      {subject.concepts && subject.concepts.length > 0 && <TextListSection title="Important Concepts / Themes" items={subject.concepts} />}
      {subject.theorists && subject.theorists.length > 0 && <TextListSection title="Important Theorists / Readings" items={subject.theorists} />}

      {subject.criticism && subject.criticism.length > 0 && (
        <Section title="Criticism">
          <ul className="space-y-2 text-sm text-ivory-dim">
            {subject.criticism.map((c) => (
              <li key={c} className="border-l-2 border-bronze/40 pl-3">
                {c}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {subject.supplementaryReading && subject.supplementaryReading.length > 0 && (
        <Section title="Supplementary Reading">
          <ul className="space-y-1.5 text-sm text-ivory-dim">
            {subject.supplementaryReading.map((r) => (
              <li key={r.title}>{r.title}</li>
            ))}
          </ul>
        </Section>
      )}

      {subject.externalResources && subject.externalResources.length > 0 && (
        <Section title="External Resources">
          <ul className="space-y-1.5 text-sm">
            {subject.externalResources.map((r) => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-bronze-bright hover:underline">
                  {r.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

function TextListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Section title={title}>
      <ul className="space-y-2 text-sm text-ivory-dim">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-bronze/40 pl-3">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 border-t border-border/70 pt-6">
      <h2 className="mb-4 font-display text-lg font-semibold text-ivory">{title}</h2>
      {children}
    </div>
  );
}
