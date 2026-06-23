import {
  Binary,
  Braces,
  Bug,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  LayoutTemplate,
  MonitorSmartphone,
  Network,
  Puzzle,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const profile = {
  name: "Kanwar Devrath",
  shortName: "KD",
  role: "MERN Stack Developer",
  email: "kanwarsingh0224@gmail.com",
  location: "Mohali, Punjab, India",
  intro:
    "I build fast, thoughtful web products with React, Node.js, and a strong eye for the small details that make software feel effortless.",
  bio: [
    "I’m a Computer Science student and full-stack developer focused on building accessible, scalable products with the MERN stack.",
    "Beyond development, I sharpen my problem-solving through data structures and algorithms and enjoy turning ambiguous ideas into polished, reliable experiences.",
  ],
  resume: "/kanwar_resume.pdf",
  image: "/kanwar.jpeg",
  github: "https://github.com/kanwar05",
  linkedin: "https://www.linkedin.com/in/kanwarsain005",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "I.K. Gujral Punjab Technical University, Mohali Campus",
    period: "2024 — Present",
    location: "Mohali, Punjab",
    score: "8.0 CGPA",
    status: "Currently pursuing",
    description:
      "Developing a strong foundation in data structures, software engineering, databases, and full-stack web development.",
    highlights: ["Computer Science", "Software Engineering", "Data Structures"],
  },
  {
    degree: "Higher Secondary Education",
    institution: "Meritorious Senior Secondary School, Sector 70",
    period: "2022 — 2024",
    location: "Mohali, Punjab",
    score: "95%",
    status: "Completed",
    description:
      "Completed the Science stream with Mathematics and Computer Science, building the analytical foundation for engineering studies.",
    highlights: ["Science", "Mathematics", "Computer Science"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: [
      { label: "React", icon: SiReact, color: "#61dafb" },
      { label: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { label: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { label: "Responsive UI", icon: MonitorSmartphone, color: "#a78bfa" },
    ],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: [
      { label: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { label: "Express", icon: SiExpress, color: "#a8b3cf" },
      { label: "REST APIs", icon: Network, color: "#22d3ee" },
      { label: "Authentication", icon: KeyRound, color: "#f59e0b" },
      { label: "Validation", icon: ShieldCheck, color: "#34d399" },
    ],
  },
  {
    title: "Data & tools",
    icon: Database,
    skills: [
      { label: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { label: "Mongoose", icon: SiMongoose, color: "#880000" },
      { label: "Git", icon: SiGit, color: "#f05032" },
      { label: "GitHub", icon: SiGithub, color: "#a8b3cf" },
      { label: "Postman", icon: SiPostman, color: "#ff6c37" },
    ],
  },
  {
    title: "Foundations",
    icon: Braces,
    skills: [
      { label: "C++", icon: SiCplusplus, color: "#659ad2" },
      { label: "DSA", icon: Binary, color: "#c084fc" },
      { label: "OOP", icon: Puzzle, color: "#60a5fa" },
      { label: "Problem Solving", icon: Bug, color: "#fb7185" },
      { label: "Clean Code", icon: Sparkles, color: "#facc15" },
    ],
  },
];

export const floatingTech = [
  { label: "React", icon: Code2 },
  { label: "Node", icon: CloudCog },
  { label: "MongoDB", icon: Database },
  { label: "Git", icon: GitBranch },
  { label: "CLI", icon: TerminalSquare },
];

export const timeline = [
  {
    period: "2025",
    title: "MERN Stack Developer Certification",
    organization: "Apna College",
    description:
      "Completed structured full-stack training covering responsive frontend development, REST APIs, databases, and end-to-end MERN applications.",
    link: "https://mycourse.app/Ms5xOO2YVGsg8TJtV",
  },
  {
    period: "Ongoing",
    title: "Open-source & DSA practice",
    organization: "Independent contributions",
    description:
      "Solving 100+ programming problems, documenting projects, and improving development workflows through GitHub-based collaboration.",
  },
];
