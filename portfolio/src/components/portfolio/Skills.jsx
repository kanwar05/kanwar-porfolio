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
        <div className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, icon: Icon, skills }, groupIndex) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.09 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-4 transition-colors hover:border-violet-400/25"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-violet-400">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.08 + index * 0.04 }}
                    className="theme-border text-muted rounded-lg border bg-[var(--surface)] px-2.5 py-1.5 text-xs"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
