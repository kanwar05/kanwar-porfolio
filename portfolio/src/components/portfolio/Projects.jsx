import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/site";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="page-shell">
        <span className="eyebrow">04 / Selected work</span>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">Projects built with purpose.</h2>
            <p className="section-copy">
              A selection of product experiments and engineering work. More is
              being documented as it ships.
            </p>
          </div>
          <a
            href="https://github.com/kanwar05"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300"
          >
            See GitHub profile <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass group overflow-hidden rounded-2xl"
            >
              <div
                className="relative h-52 overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(124,92,255,.5),transparent_32%),linear-gradient(135deg,#121729,#070910)]"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                )}
                {!project.image && (
                  <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
                )}
                <div className="media-overlay absolute inset-0" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                  {project.type}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-display text-lg font-bold hover:text-violet-500"
                    >
                      {project.title}
                    </Link>
                    <p className="text-muted mt-2 max-w-2xl text-sm leading-6">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="glass grid size-9 shrink-0 place-items-center rounded-lg transition hover:border-violet-400/30"
                  >
                    <Github size={16} />
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-violet-500">
                      {tag} <span className="text-subtle ml-1.5">/</span>
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-violet-500"
                >
                  Read case study <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
