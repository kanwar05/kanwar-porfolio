import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { timeline } from "../../data/site";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" className="section-tint">
      <div className="page-shell">
        <span className="eyebrow">05 / Journey</span>
        <h2 className="section-title">Learning in public. Building with momentum.</h2>
        <div className="relative mt-10 max-w-4xl">
          <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-violet-400 via-cyan-400/50 to-transparent" />
          <div className="space-y-7">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 size-[15px] rounded-full border-[3px] border-[var(--page)] bg-violet-400 shadow-[0_0_0_4px_rgba(124,92,255,.16)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-500">
                  {item.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-subtle mt-1 text-xs font-medium">{item.organization}</p>
                <p className="text-muted mt-3 max-w-2xl text-sm leading-6">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cyan-500"
                  >
                    View credential <ExternalLink size={15} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
