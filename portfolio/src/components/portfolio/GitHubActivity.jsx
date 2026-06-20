import { useEffect, useState } from "react";
import { AlertCircle, ExternalLink, GitCommit, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import { api } from "../../lib/api";

export default function GitHubActivity() {
  const [state, setState] = useState({ loading: true, data: null, error: "" });

  useEffect(() => {
    const controller = new AbortController();
    api
      .get("/api/github/profile", { signal: controller.signal })
      .then(({ data }) => setState({ loading: false, data: data.data, error: "" }))
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setState({
            loading: false,
            data: null,
            error: "GitHub activity is temporarily unavailable.",
          });
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <Section id="github">
      <div className="page-shell">
        <span className="eyebrow">
          <Github size={14} /> 05 / GitHub
        </span>
        <h2 className="section-title">Building and learning in public.</h2>
        <p className="section-copy">
          Selected repositories, language usage, and recent public development activity.
        </p>

        {state.loading && (
          <div className="mt-9 grid gap-3 md:grid-cols-3" aria-label="Loading GitHub activity">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass h-36 animate-pulse rounded-2xl" />
            ))}
          </div>
        )}

        {state.error && (
          <div className="glass text-muted mt-9 flex items-center gap-3 rounded-xl p-4 text-sm">
            <AlertCircle size={18} className="text-amber-500" /> {state.error}
          </div>
        )}

        {state.data && (
          <>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["Public repos", state.data.profile.publicRepos],
                ["Total stars", state.data.totalStars],
                ["Followers", state.data.profile.followers],
              ].map(([label, value]) => (
                <div key={label} className="glass rounded-2xl p-4">
                  <p className="text-subtle text-[10px] uppercase tracking-[.16em]">{label}</p>
                  <p className="mt-2 font-display text-2xl font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
              <div className="grid gap-3 sm:grid-cols-2">
                {state.data.repositories.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="glass rounded-2xl p-4 transition hover:-translate-y-1 hover:border-violet-400/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-sm font-bold">{repo.name}</h3>
                      <ExternalLink size={15} className="text-subtle" />
                    </div>
                    <p className="text-muted mt-2 line-clamp-2 text-xs leading-5">
                      {repo.description || "Public GitHub repository"}
                    </p>
                    <div className="text-subtle mt-4 flex items-center gap-4 text-[11px]">
                      <span>{repo.language || "Code"}</span>
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {repo.stars}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4">
                <div className="glass rounded-2xl p-4">
                  <h3 className="font-display text-sm font-bold">Languages</h3>
                  <div className="mt-4 space-y-3">
                    {state.data.languages.map((language) => (
                      <div key={language.name}>
                        <div className="text-muted flex justify-between text-[11px]">
                          <span>{language.name}</span><span>{language.percentage}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-violet-500/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                            style={{ width: `${language.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-4">
                  <h3 className="font-display text-sm font-bold">Recent commits</h3>
                  <div className="mt-4 space-y-3">
                    {state.data.recentCommits.slice(0, 4).map((commit) => (
                      <a
                        key={commit.id}
                        href={commit.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted flex gap-3 text-xs hover:text-violet-500"
                      >
                        <GitCommit size={15} className="mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{commit.message}</span>
                      </a>
                    ))}
                    {!state.data.recentCommits.length && (
                      <p className="text-subtle text-xs">No recent public push activity.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass mt-4 rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-bold">30-day activity</h3>
                <a
                  href={state.data.profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-violet-500"
                >
                  View profile
                </a>
              </div>
              <div className="mt-4 grid gap-1 [grid-template-columns:repeat(15,minmax(0,1fr))] sm:[grid-template-columns:repeat(30,minmax(0,1fr))]">
                {state.data.activity.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.date}: ${day.count} activities`}
                    className={`aspect-square rounded-sm ${
                      day.count > 5
                        ? "bg-violet-500"
                        : day.count > 2
                          ? "bg-violet-500/60"
                          : day.count
                            ? "bg-violet-500/30"
                            : "bg-violet-500/8"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
