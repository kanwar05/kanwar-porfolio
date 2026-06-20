import { useEffect, useMemo, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../../data/site";
import useActiveSection from "../../hooks/useActiveSection";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds, isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className={`mx-auto max-w-6xl rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
        scrolled ? "nav-surface" : "border-transparent bg-transparent"
      }`}>
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-display font-bold">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm shadow-lg shadow-violet-500/20">
              {profile.shortName}
            </span>
            <span>{profile.name.split(" ")[0]}</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className={`relative text-xs font-medium transition hover:text-violet-500 ${
                  isHome && activeSection === link.href.slice(1)
                    ? "text-violet-500"
                    : "text-muted"
                }`}
              >
                {link.label}
                {isHome && activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-1/2 size-1 -translate-x-1/2 rounded-full bg-violet-500"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className="glass grid size-9 place-items-center rounded-xl transition hover:border-violet-400/30"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              to="/#contact"
              className="theme-button rounded-xl px-4 py-2.5 text-xs font-semibold transition hover:opacity-85"
            >
              Let’s talk
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="glass grid size-9 place-items-center rounded-xl"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="glass grid size-9 place-items-center rounded-xl"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="theme-border space-y-1 border-t py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={`/${link.href}`}
                    onClick={() => setOpen(false)}
                    className="text-muted block rounded-xl px-4 py-2.5 text-sm hover:bg-violet-500/8 hover:text-violet-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
