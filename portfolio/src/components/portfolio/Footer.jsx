import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, profile } from "../../data/site";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <footer className="theme-border border-t py-8">
      <div className="page-shell flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <a href="#" className="font-display text-lg font-bold">
            {profile.name}<span className="text-violet-400">.</span>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={`/${link.href}`} className="text-subtle text-xs hover:text-violet-500">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="glass text-muted grid size-9 place-items-center rounded-lg transition hover:border-violet-400/30 hover:text-violet-500"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="theme-border text-subtle border-t pt-5 text-center text-[11px]">
          © {new Date().getFullYear()} {profile.name}. Designed and built with care.
        </p>
      </div>
    </footer>
  );
}
