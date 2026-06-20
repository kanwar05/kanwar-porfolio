import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  GitFork,
  Github,
  LoaderCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { api } from "../../lib/api";
import Section from "./Section";

const repositoryImages = {
  algomentor: "/images/repositories/algomentor.png",
  "skillssphere-ai": "/images/repositories/skillssphere-ai.png",
  "growfinix-tech-intern": "/images/repositories/growfinix-tech-intern.png",
  "cognifyz-fullstack-internship":
    "/images/repositories/cognifyz-fullstack-internship.png",
  eventra: "/images/repositories/eventra.png",
  filevault: "/images/repositories/filevault.png",
  cardioscan: "/images/repositories/cardioscan.png",
  ridex: "/images/repositories/ridex.png",
  "spotify-clone": "/images/repositories/spotify-clone.png",
  "zerodha-clone": "/images/repositories/zerodha-clone.png",
  "mern-auth": "/images/repositories/mern-auth.png",
  "kanwar-porfolio": "/images/repositories/kanwar-portfolio.png",
};

export default function Projects() {
  const [github, setGithub] = useState({ loading: true, projects: [], error: "" });

  useEffect(() => {
    const controller = new AbortController();
    api
      .get("/api/github/profile", { signal: controller.signal })
      .then(({ data }) =>
        setGithub({
          loading: false,
          projects: data.data.projects || [],
          error: "",
        }),
      )
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setGithub({
            loading: false,
            projects: [],
            error: "GitHub repositories could not be loaded right now.",
          });
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <Section id="projects">
      <div className="page-shell">
        <span className="eyebrow">04 / Selected work</span>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">Projects I have built and contributed to.</h2>
            <p className="section-copy">
              Live repository data from GitHub, including original products,
              internship work, experiments, and collaborative contributions.
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

        <div className="mt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-display text-xl font-bold sm:text-2xl">All public repositories</h3>
              <p className="text-muted mt-2 max-w-2xl text-sm leading-6">
                Original builds, internship work, experiments, and collaborative contributions.
                This list updates automatically from GitHub.
              </p>
            </div>
            {!github.loading && !github.error && (
              <span className="text-subtle text-xs">
                {github.projects.length} repositories
              </span>
            )}
          </div>

          {github.loading && (
            <div className="text-muted mt-9 flex items-center gap-2 text-sm">
              <LoaderCircle size={17} className="animate-spin text-violet-500" />
              Fetching repositories…
            </div>
          )}

          {github.error && (
            <div className="glass text-muted mt-9 rounded-xl p-4 text-sm">
              {github.error}{" "}
              <a
                href="https://github.com/kanwar05?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-violet-500"
              >
                View them on GitHub.
              </a>
            </div>
          )}

          {!!github.projects.length && (
            <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {github.projects.map((repo, index) => (
                <motion.article
                  key={repo.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: Math.min(index * 0.04, 0.28) }}
                  whileHover={{ y: -4 }}
                  className="glass group flex min-h-56 flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#080b13]">
                    <img
                      src={
                        repositoryImages[repo.name.toLowerCase()] ||
                        "/images/repositories/kanwar-portfolio.png"
                      }
                      alt={`${repo.name} project interface concept`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b13]/80 via-transparent to-transparent" />
                    {repo.isFork && (
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[9px] font-semibold text-white backdrop-blur">
                        <GitFork size={10} /> Contribution
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-base font-bold hover:text-violet-500"
                      >
                        {repo.name}
                      </a>
                      <Github size={16} className="text-subtle shrink-0" />
                    </div>
                    <p className="text-muted mt-2 line-clamp-3 text-xs leading-5">
                      {repo.description ||
                        `${repo.name} is a ${repo.language || "software"} project available on GitHub.`}
                    </p>

                    <div className="text-subtle mt-auto flex flex-wrap items-center gap-3 pt-5 text-[10px]">
                      <span>{repo.language || "Repository"}</span>
                      <span className="flex items-center gap-1">
                        <Star size={11} /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} /> {repo.forks}
                      </span>
                    </div>

                    <div className="theme-border mt-3 flex gap-4 border-t pt-3">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-violet-500"
                      >
                        Source <ArrowUpRight size={12} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-500"
                        >
                          Live demo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
