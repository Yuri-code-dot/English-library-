import type { ReactNode } from "react";

const lastUpdated = "September 16, 2026";
const repo = "https://github.com/Yuri-code-dot/English-library-";
const projectEmail = "tensoramaxstudio@gmail.com";

function LegalLayout({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">{eyebrow}</p>
      <h1 className="mt-1 font-display text-3xl font-bold text-ivory sm:text-4xl">{title}</h1>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ivory-faint">Last updated {lastUpdated}</p>
      <div className="mt-8 space-y-7 text-sm leading-7 text-ivory-dim [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ivory [&_a]:text-bronze-bright [&_a]:hover:underline">{children}</div>
    </article>
  );
}

export function PrivacyPage() {
  return <LegalLayout eyebrow="Legal" title="Privacy Policy">
    <section><h2>What we collect</h2><p className="mt-2">English Literature Library does not require accounts, passwords, or forms to browse. The app does not intentionally collect names, email addresses, messages, or other personal information from visitors.</p></section>
    <section><h2>Local browser storage</h2><p className="mt-2">Reading preferences such as reader font size may be stored in your browser using localStorage. This stays on your device and can be removed by clearing the site data.</p></section>
    <section><h2>Hosting and third parties</h2><p className="mt-2">The site is hosted through GitHub Pages. GitHub states that visitors to GitHub Pages sites may have IP addresses logged and stored for security. The library also uses or links to services such as Google Fonts, Wikimedia Commons, and public-domain text archives, which have their own policies.</p></section>
    <section><h2>External links</h2><p className="mt-2">External archives, books, images, and services are outside this project and control their own privacy practices.</p></section>
    <section><h2>Contact</h2><p className="mt-2">For questions, corrections, or privacy requests, email <a href={`mailto:${projectEmail}`}>{projectEmail}</a> or use the <a href={repo} target="_blank" rel="noopener noreferrer">project GitHub repository</a>.</p></section>
  </LegalLayout>;
}

export function CookiesPage() {
  return <LegalLayout eyebrow="Legal" title="Cookie Policy">
    <section><h2>Current use</h2><p className="mt-2">English Literature Library does not currently set advertising, marketing, or analytics cookies of its own. Reader preferences use localStorage, which is different from a cookie and remains on your device.</p></section>
    <section><h2>Third-party technologies</h2><p className="mt-2">External resources and services linked from the library may use their own cookies or similar technologies. Their policies apply when you interact with them.</p></section>
    <section><h2>Your controls</h2><p className="mt-2">Your browser provides controls for cookies and stored site data. Blocking third-party resources may affect some fonts, images, or reading material.</p></section>
  </LegalLayout>;
}

export function TermsPage() {
  return <LegalLayout eyebrow="Legal" title="Terms & Conditions">
    <section><h2>Use of the library</h2><p className="mt-2">This is an educational and research resource for students, teachers, and readers. Use it lawfully for personal, educational, and research purposes.</p></section>
    <section><h2>Content and copyright</h2><p className="mt-2">The project does not claim ownership of third-party literary works, portraits, scans, or other materials. Source and attribution information is provided where available. Verify the applicable rights before redistributing material.</p></section>
    <section><h2>External services</h2><p className="mt-2">External archives and services control their own availability, content, privacy practices, and terms.</p></section>
    <section><h2>Availability</h2><p className="mt-2">The catalogue is experimental and may contain omissions, corrections, broken links, or temporary outages. Content may change without notice.</p></section>
    <section><h2>Feedback</h2><p className="mt-2">Please report incorrect attribution, broken sources, or catalogue errors by emailing <a href={`mailto:${projectEmail}`}>{projectEmail}</a> or through the <a href={repo} target="_blank" rel="noopener noreferrer">project GitHub repository</a>.</p></section>
  </LegalLayout>;
}

export function ContactPage() {
  return <LegalLayout eyebrow="Project" title="Contact">
    <section><h2>Get in touch</h2><p className="mt-2">For feedback, corrections, source issues, privacy requests, or project suggestions, email <a href={`mailto:${projectEmail}`}>{projectEmail}</a> or use the <a href={repo} target="_blank" rel="noopener noreferrer">project GitHub repository</a>.</p></section>
    <section><h2>Project email</h2><p className="mt-2"><a href={`mailto:${projectEmail}`}>{projectEmail}</a></p></section>
  </LegalLayout>;
}
