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
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiScikitlearn,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export const profile = {
  name: "Kanwar Sain",
  shortName: "KS",
  role: "Full Stack Developer",
  email: "kanwarsingh0507@gmail.com",
  location: "Mohali, Punjab, India",
  intro:
    "I build scalable full-stack products with React, Node.js, MongoDB, and a growing focus on data-driven software.",
  bio: [
    "I’m a Computer Science student and full-stack developer focused on MERN applications, secure APIs, responsive interfaces, and practical product workflows.",
    "Beyond development, I sharpen my problem-solving through data structures and algorithms, contribute to open-source projects, and explore machine learning with Python.",
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
    period: "July 2024 — Present",
    location: "Mohali, Punjab",
    score: "8.29 CGPA",
    status: "Currently pursuing",
    description:
      "Studying computer science engineering with a focus on data structures, software engineering, databases, operating systems, and full-stack development.",
    highlights: ["Computer Science", "DBMS", "Operating Systems"],
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
      { label: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      { label: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { label: "Vite", icon: MonitorSmartphone, color: "#a78bfa" },
    ],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: [
      { label: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { label: "Express", icon: SiExpress, color: "#a8b3cf" },
      { label: "REST APIs", icon: Network, color: "#22d3ee" },
      { label: "JWT Auth", icon: KeyRound, color: "#f59e0b" },
      { label: "API Security", icon: ShieldCheck, color: "#34d399" },
    ],
  },
  {
    title: "Data & deployment",
    icon: Database,
    skills: [
      { label: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { label: "Mongoose", icon: SiMongoose, color: "#880000" },
      { label: "MySQL", icon: SiMysql, color: "#4479a1" },
      { label: "Render", icon: SiRender, color: "#46e3b7" },
      { label: "Vercel", icon: SiVercel, color: "#a8b3cf" },
      { label: "Postman", icon: SiPostman, color: "#ff6c37" },
    ],
  },
  {
    title: "Tools & foundations",
    icon: Braces,
    skills: [
      { label: "Git", icon: SiGit, color: "#f05032" },
      { label: "GitHub", icon: SiGithub, color: "#a8b3cf" },
      { label: "C++", icon: SiCplusplus, color: "#659ad2" },
      { label: "DSA", icon: Binary, color: "#c084fc" },
      { label: "OOP", icon: Puzzle, color: "#60a5fa" },
      { label: "VS Code", icon: Code2, color: "#38bdf8" },
    ],
  },
  {
    title: "Machine learning",
    icon: Sparkles,
    skills: [
      { label: "Python", icon: SiPython, color: "#3776ab" },
      { label: "Scikit-Learn", icon: SiScikitlearn, color: "#f7931e" },
      { label: "Pandas", icon: SiPandas, color: "#150458" },
      { label: "NumPy", icon: SiNumpy, color: "#4dabcf" },
      { label: "Jupyter", icon: SiJupyter, color: "#f37626" },
      { label: "Feature Eng.", icon: Bug, color: "#fb7185" },
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
    period: "May 2026 — Present",
    title: "Open Source Contributor",
    organization: "GirlScript Summer of Code 2026",
    description:
      "Ranked among the top 100 contributors with 80+ merged pull requests across production-grade repositories, shipping features such as bookmarks, notification preferences, autosave workflows, advanced search, filtering, and role-based access controls.",
  },
  {
    period: "May 2026 — June 2026",
    title: "Full Stack Development Intern",
    organization: "Cognifyz Technologies",
    description:
      "Developed scalable full-stack applications with Node.js, Express.js, MongoDB, and EJS, including authentication, database integration, responsive UI work, JWT, bcrypt, rate limiting, caching, and request logging.",
  },
  {
    period: "Ongoing",
    title: "DSA, certifications & shipped projects",
    organization: "Independent learning",
    description:
      "Solved 500+ data structures and algorithms problems, earned certifications in DSA and MERN stack development, and built deployed products with authentication, analytics, cloud deployment, testing, and scalable backend architecture.",
    link: "https://mycourse.app/Ms5xOO2YVGsg8TJtV",
  },
];
