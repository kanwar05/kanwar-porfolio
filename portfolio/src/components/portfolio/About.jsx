import { ArrowUpRight, CodeXml, Gauge, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "../../data/site";
import Section from "./Section";

const values = [
  { icon: CodeXml, label: "Clean systems", copy: "Maintainable code with sensible boundaries." },
  { icon: Gauge, label: "Performance", copy: "Fast interactions across devices and networks." },
  { icon: Users, label: "Collaboration", copy: "Clear communication and thoughtful handoffs." },
  { icon: Lightbulb, label: "Curiosity", copy: "Always learning, testing, and refining." },
];

export default function About() {
  return (
    <Section id="about">
      <div className="page-shell">
        <span className="eyebrow">01 / About</span>
        <div className="mt-6 grid gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="section-title">
              A developer who cares about both sides of the screen.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-500 hover:text-violet-400"
            >
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </div>
          <div>
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-muted mb-4 text-base leading-7">
                {paragraph}
              </p>
            ))}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {values.map(({ icon: Icon, label, copy }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-2xl p-4"
                >
                  <Icon className="text-cyan-500" size={19} />
                  <h3 className="mt-3 font-display text-sm font-semibold">{label}</h3>
                  <p className="text-muted mt-1.5 text-xs leading-5">{copy}</p>
                  <span className="text-subtle mt-3 block text-[10px]">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
