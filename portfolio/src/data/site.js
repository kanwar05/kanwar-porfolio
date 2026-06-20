import {
  Braces,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  ServerCog,
  TerminalSquare,
} from "lucide-react";

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
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "Validation"],
  },
  {
    title: "Data & tools",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman"],
  },
  {
    title: "Foundations",
    icon: Braces,
    skills: ["C++", "DSA", "OOP", "Problem Solving", "Clean Code"],
  },
];

export const floatingTech = [
  { label: "React", icon: Code2 },
  { label: "Node", icon: CloudCog },
  { label: "MongoDB", icon: Database },
  { label: "Git", icon: GitBranch },
  { label: "CLI", icon: TerminalSquare },
];

export const projects = [
  {
    title: "Developer Portfolio",
    type: "Full-stack experience",
    description:
      "A premium personal portfolio with animated storytelling, responsive layouts, and a database-backed contact workflow.",
    tags: ["React", "Framer Motion", "Express", "MongoDB"],
    image: "/images/projects/project1.webp",
    github: "https://github.com/kanwar05",
    featured: true,
  },
  {
    title: "MERN Product Platform",
    type: "In development",
    description:
      "A scalable product platform exploring secure authentication, reusable APIs, stateful interfaces, and practical deployment patterns.",
    tags: ["MERN", "REST API", "JWT", "Tailwind"],
    github: "https://github.com/kanwar05",
  },
  {
    title: "DSA Practice Lab",
    type: "Problem-solving",
    description:
      "A growing collection of data structure and algorithm solutions, written for clarity, complexity awareness, and repeatable learning.",
    tags: ["C++", "Algorithms", "Git", "Documentation"],
    github: "https://github.com/kanwar05",
  },
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
