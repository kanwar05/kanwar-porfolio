import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers3,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getCaseStudy } from "../data/caseStudies";
import NotFoundPage from "./NotFoundPage";
import usePageMeta from "../hooks/usePageMeta";

function CaseSection({ title, children }) {
  return (
    <section className="border-t theme-border py-10 sm:py-14">
      <div className="page-shell grid gap-6 lg:grid-cols-[.32fr_.68fr]">
        <h2 className="font-display text-lg font-bold sm:text-xl">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = getCaseStudy(slug);

  usePageMeta({
    title: project ? `${project.title} Case Study — Kanwar Devrath` : "Project not found",
    description: project?.summary || "The requested project could not be found.",
    path: `/projects/${slug}`,
    image: project?.image,
  });

  if (!project) return <NotFoundPage />;

  return (
    <article className="pb-16 pt-28">
      <header className="page-shell">
        <Link to="/#projects" className="text-muted inline-flex items-center gap-2 text-xs hover:text-violet-500">
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
              {project.title}
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
            >
              <Github size={17} /> Repository
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Live demo <ExternalLink size={17} />
              </a>
            ) : (
              <span className="theme-border text-subtle inline-flex items-center rounded-xl border px-4 py-3 text-sm">
                Demo coming soon
              </span>
            )}
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          src={project.image}
          alt={`${project.title} product interface overview`}
          className="mt-10 w-full rounded-2xl border theme-border shadow-2xl"
        />
      </header>

      <CaseSection title="Problem">
        <p className="text-muted max-w-3xl text-base leading-7">{project.problem}</p>
      </CaseSection>
      <CaseSection title="Solution">
        <p className="text-muted max-w-3xl text-base leading-7">{project.solution}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[.16em] text-violet-500">
          {project.status}
        </p>
      </CaseSection>
      <CaseSection title="Technology">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="glass rounded-lg px-3 py-2 text-xs font-semibold">
              {item}
            </span>
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Architecture">
        <div className="grid gap-3 sm:grid-cols-2">
          {project.architecture.map((item) => (
            <div key={item} className="glass rounded-xl p-4">
              <Layers3 size={18} className="text-cyan-500" />
              <p className="text-muted mt-3 text-sm leading-6">{item}</p>
            </div>
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Key features">
        <div className="grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <p key={feature} className="text-muted flex items-center gap-3 text-sm">
              <CheckCircle2 size={17} className="shrink-0 text-violet-500" /> {feature}
            </p>
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Screens">
        <div className="grid gap-4">
          {project.gallery.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-2xl border theme-border"
            />
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Challenges solved">
        <div className="grid gap-4 sm:grid-cols-2">
          {project.challenges.map((challenge) => (
            <div key={challenge.title} className="glass rounded-xl p-5">
              <h3 className="font-display text-sm font-bold">{challenge.title}</h3>
              <p className="text-muted mt-2 text-sm leading-6">{challenge.copy}</p>
            </div>
          ))}
        </div>
      </CaseSection>
      <CaseSection title="Impact">
        <div className="grid gap-3 sm:grid-cols-3">
          {project.impact.map((item) => (
            <div key={item.label} className="glass rounded-xl p-5">
              <p className="font-display text-xl font-bold text-violet-500">{item.value}</p>
              <p className="text-muted mt-1 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
        <Link to="/#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-500">
          Discuss a similar project <ArrowUpRight size={16} />
        </Link>
      </CaseSection>
    </article>
  );
}
