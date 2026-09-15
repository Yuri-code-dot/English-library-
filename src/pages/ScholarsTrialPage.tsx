import { useMemo, useState } from "react";
import { quizBank } from "../data/quizBank";

export default function ScholarsTrialPage() {
  const [subject, setSubject] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [query, setQuery] = useState("");

  const questions = useMemo(() => quizBank.filter((q) =>
    (subject === "all" || q.subjectSlug === subject) &&
    (difficulty === "all" || q.difficulty === difficulty) &&
    q.question.toLowerCase().includes(query.toLowerCase())
  ), [subject, difficulty, query]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <header className="mb-8 border-b border-border pb-7">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze-bright">Study • Questions • Answers</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ivory">The Scholar's Trial</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory-faint">A dedicated question and answer bank for studying English Literature. Practice questions are clearly separated from verified university papers.</p>
      </header>

      <section className="mb-8 grid gap-3 sm:grid-cols-3">
        <input aria-label="Search questions" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions…" className="rounded-md border border-border bg-surface-raised px-4 py-3 text-sm text-ivory outline-none focus:border-bronze-bright" />
        <select aria-label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-md border border-border bg-surface-raised px-4 py-3 text-sm text-ivory">
          <option value="all">All subjects</option>
          <option value="womens-writing">Women's Writing</option>
          <option value="postcolonial-literatures">Postcolonial Literatures</option>
          <option value="modern-european-drama">Modern European Drama</option>
          <option value="american-literature">American Literature</option>
        </select>
        <select aria-label="Difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="rounded-md border border-border bg-surface-raised px-4 py-3 text-sm text-ivory">
          <option value="all">All levels</option>
          <option value="foundation">Foundation</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {questions.map((q, index) => (
          <article key={q.id} className="rounded-lg border border-border bg-surface-raised p-5">
            <div className="flex items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-wider text-ivory-faint">
              <span>Trial {index + 1}</span><span>{q.difficulty}</span>
            </div>
            <h2 className="mt-4 font-display text-lg leading-snug text-ivory">{q.question}</h2>
            <ol className="mt-4 space-y-2 text-sm text-ivory-faint">
              {q.options.map((option, i) => <li key={option} className="rounded border border-border/70 px-3 py-2"><span className="mr-2 font-mono text-bronze-bright">{String.fromCharCode(65 + i)}.</span>{option}</li>)}
            </ol>
            <details className="mt-4 border-t border-border pt-4">
              <summary className="cursor-pointer text-sm font-medium text-bronze-bright">Reveal answer & explanation</summary>
              <p className="mt-3 text-sm text-ivory"><strong>Answer:</strong> {q.options[q.answer]}</p>
              <p className="mt-2 text-sm leading-6 text-ivory-faint">{q.explanation}</p>
            </details>
          </article>
        ))}
      </div>
      {!questions.length && <p className="py-16 text-center text-sm text-ivory-faint">No questions match your filters yet.</p>}
    </main>
  );
}
