import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { floatingTech, profile } from "../../data/site";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pb-14 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,92,255,.18),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(85,214,255,.12),transparent_28%)]" />
      <div className="theme-grid absolute inset-0 opacity-60 [background-size:56px_56px]" />

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={item} className="eyebrow">
            <Sparkles size={14} />
            Available for internships
          </motion.div>
          <motion.h1
            variants={item}
            className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
          >
            Building digital products that feel{" "}
            <span className="gradient-text">clear, fast, and alive.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-muted mt-5 max-w-xl text-base leading-7"
          >
            Hi, I’m {profile.name} — a {profile.role}. {profile.intro}
          </motion.p>
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5"
            >
              Explore my work <ArrowDown size={18} />
            </a>
            <a
              href={profile.resume}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-violet-400/30"
            >
              Resume <Download size={18} />
            </a>
          </motion.div>
          <motion.div
            variants={item}
            className="text-subtle mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
          >
            <span>Based in {profile.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <span>Open to meaningful collaborations</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-8 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-2.5">
            <img
              src={profile.image}
              alt={`${profile.name}, ${profile.role}`}
              className="aspect-[4/5] w-full rounded-[1.15rem] object-cover object-top"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-[#090b13]/80 p-3 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.16em] text-violet-300">
                Currently focused on
              </p>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-display text-sm font-semibold text-white">Full-stack systems</p>
                <ArrowUpRight className="text-cyan-300" size={17} />
              </div>
            </div>
          </div>

          {floatingTech.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={label}
              className={`glass text-main absolute hidden items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold sm:flex ${
                index % 2 ? "-right-8" : "-left-8"
              }`}
              style={{ top: `${12 + index * 17}%` }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + index * 0.35, repeat: Infinity }}
            >
              <Icon size={15} className="text-cyan-300" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
