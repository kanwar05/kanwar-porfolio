import { motion } from "framer-motion";
import { skillGroups } from "../../data/site";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" className="section-tint">
      <div className="page-shell">
        <span className="eyebrow">03 / Capabilities</span>
        <h2 className="section-title">The tools I use to turn ideas into products.</h2>
        <p className="section-copy">
          A practical full-stack toolkit, grounded in strong fundamentals and
          shaped around shipping reliable web experiences.
        </p>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }, groupIndex) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.09 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-violet-400/30"
            >
              <span className="absolute -right-10 -top-10 size-28 rounded-full bg-violet-500/8 blur-2xl transition group-hover:bg-violet-500/15" />
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-violet-400">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {skills.map(({ label, icon: SkillIcon, color }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.08 + index * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="theme-border flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border bg-[var(--surface)] px-2 py-3 text-center transition-colors hover:bg-[var(--surface-strong)]"
                  >
                    <span
                      className="grid size-8 place-items-center rounded-lg"
                      style={{
                        color,
                        backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)`,
                      }}
                      aria-hidden="true"
                    >
                      <SkillIcon size={18} />
                    </span>
                    <span className="text-muted text-[11px] font-semibold leading-tight">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
