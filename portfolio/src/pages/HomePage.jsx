import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Education from "../components/portfolio/Education";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import GitHubActivity from "../components/portfolio/GitHubActivity";
import Experience from "../components/portfolio/Experience";
import Contact from "../components/portfolio/Contact";
import { profile } from "../data/site";
import usePageMeta from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta({
    title: `${profile.name} — MERN Stack Developer`,
    description: profile.intro,
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      image: new URL(profile.image, window.location.origin).toString(),
      url: window.location.origin,
      sameAs: [profile.github, profile.linkedin],
      address: { "@type": "PostalAddress", addressLocality: profile.location },
      knowsAbout: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    },
  });

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GitHubActivity />
      <Experience />
      <Contact />
    </>
  );
}
