import { BookOpen, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "../../data/site";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" className="section-tint">
      <div className="page-shell">
        <span className="eyebrow">
          <GraduationCap size={15} />
          02 / Education
        </span>

        <div className="mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">The foundation behind the craft.</h2>
            <p className="section-copy">
              My academic journey has shaped how I reason through problems,
              learn new systems, and turn technical fundamentals into working software.
            </p>
          </div>
          <div className="glass hidden rounded-xl px-4 py-3 text-right lg:block">
            <p className="text-subtle text-[10px] uppercase tracking-[0.16em]">
              Current focus
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-violet-500">
              Computer Science & MERN
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="absolute bottom-10 left-5 top-10 hidden w-px bg-gradient-to-b from-violet-400 via-cyan-400/60 to-transparent md:block" />

          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -3 }}
                className="glass group relative rounded-2xl p-5 transition-colors hover:border-violet-400/25 md:ml-14 md:p-6"
              >
                <span className="absolute -left-[45px] top-10 hidden size-4 rounded-full border-[3px] border-[var(--page)] bg-violet-400 shadow-[0_0_0_5px_rgba(124,92,255,.15)] md:block" />

                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-500/15 bg-cyan-500/8 px-2.5 py-1 text-[10px] font-semibold text-cyan-500">
                        {item.status}
                      </span>
                      <span className="text-subtle flex items-center gap-2 text-xs">
                        <CalendarDays size={15} />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-main mt-4 font-display text-lg font-bold tracking-tight sm:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-violet-500">{item.institution}</p>
                    <p className="text-subtle mt-1.5 flex items-center gap-2 text-xs">
                      <MapPin size={15} />
                      {item.location}
                    </p>
                    <p className="text-muted mt-4 max-w-3xl text-sm leading-6">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="theme-border text-muted rounded-lg border bg-[var(--surface)] px-2.5 py-1.5 text-[11px] font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex min-w-36 items-center gap-3 rounded-xl border border-violet-400/15 bg-violet-400/8 p-4 lg:flex-col lg:items-start">
                    <span className="grid size-9 place-items-center rounded-lg bg-violet-400/12 text-violet-500">
                      <BookOpen size={18} />
                    </span>
                    <div>
                      <p className="text-subtle text-[9px] uppercase tracking-[0.14em]">
                        Academic score
                      </p>
                      <p className="text-main mt-1 font-display text-xl font-bold">
                        {item.score}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
