import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";

const LibraryPage = lazy(() => import("./pages/LibraryPage").then((module) => ({ default: module.LibraryPage })));
const BookDetailPage = lazy(() => import("./pages/BookDetailPage").then((module) => ({ default: module.BookDetailPage })));
const CurriculumPage = lazy(() => import("./pages/CurriculumPage").then((module) => ({ default: module.CurriculumPage })));
const SubjectDetailPage = lazy(() => import("./pages/SubjectDetailPage").then((module) => ({ default: module.SubjectDetailPage })));
const AuthorsPage = lazy(() => import("./pages/AuthorsPage").then((module) => ({ default: module.AuthorsPage })));
const AuthorDetailPage = lazy(() => import("./pages/AuthorDetailPage").then((module) => ({ default: module.AuthorDetailPage })));
const PeriodsPage = lazy(() => import("./pages/PeriodsPage").then((module) => ({ default: module.PeriodsPage })));
const PeriodDetailPage = lazy(() => import("./pages/PeriodDetailPage").then((module) => ({ default: module.PeriodDetailPage })));
const GenresPage = lazy(() => import("./pages/GenresPage").then((module) => ({ default: module.GenresPage })));
const SearchPage = lazy(() => import("./pages/SearchPage").then((module) => ({ default: module.SearchPage })));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage").then((module) => ({ default: module.ResourcesPage })));
const SourcesCreditsPage = lazy(() => import("./pages/ResourcesPage").then((module) => ({ default: module.SourcesCreditsPage })));
const ReaderPage = lazy(() => import("./pages/ReaderPage").then((module) => ({ default: module.ReaderPage })));
const ScholarsTrialPage = lazy(() => import("./pages/ScholarsTrialPage"));
const PrivacyPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.PrivacyPage })));
const CookiesPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.CookiesPage })));
const TermsPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.TermsPage })));
const ContactPage = lazy(() => import("./pages/LegalPage").then((module) => ({ default: module.ContactPage })));

const routerBasename = window.location.pathname.startsWith("/English-library-") ? "/English-library-" : "/";

function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center gap-2 px-4 py-24 text-center">
      <p className="font-display text-xl italic text-ivory-dim">This shelf is empty.</p>
      <p className="text-sm text-ivory-faint">The page you're looking for doesn't exist in this catalogue.</p>
    </div>
  );
}

function RouteFallback() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center px-4 py-16" aria-live="polite">
      <div className="text-center">
        <div className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-border border-t-bronze" aria-hidden="true" />
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ivory-faint">Opening shelf…</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/library/:slug" element={<BookDetailPage />} />
            <Route path="/read/:slug" element={<ReaderPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/curriculum/:slug" element={<SubjectDetailPage />} />
            <Route path="/scholars-trial" element={<ScholarsTrialPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/authors/:slug" element={<AuthorDetailPage />} />
            <Route path="/periods" element={<PeriodsPage />} />
            <Route path="/periods/:slug" element={<PeriodDetailPage />} />
            <Route path="/genres" element={<GenresPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/sources" element={<SourcesCreditsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
