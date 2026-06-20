import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found — Kanwar Devrath",
    description: "The requested portfolio page could not be found.",
    path: window.location.pathname,
  });

  return (
    <section className="page-shell grid min-h-[75vh] place-items-center pb-16 pt-28 text-center">
      <div>
        <span className="glass mx-auto grid size-14 place-items-center rounded-2xl text-violet-500">
          <SearchX size={26} />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-violet-500">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold">This page wandered off.</h1>
        <p className="text-muted mx-auto mt-3 max-w-md text-sm leading-6">
          The route may have changed, or the page never existed. The homepage is a safer trail.
        </p>
        <Link
          to="/"
          className="theme-button mt-7 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
        >
          <ArrowLeft size={16} /> Return home
        </Link>
      </div>
    </section>
  );
}
