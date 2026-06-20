export const caseStudies = [
  {
    slug: "job-tracker",
    title: "Job Tracker",
    eyebrow: "Full-stack product case study",
    summary:
      "A MERN application designed to help candidates organize applications, interviews, follow-ups, and outcomes from one focused workspace.",
    status: "Product concept in active development",
    image: "/images/projects/job-tracker-dashboard.svg",
    gallery: [
      {
        src: "/images/projects/job-tracker-dashboard.svg",
        alt: "Job Tracker dashboard showing application statistics, status filters, and recent job cards.",
      },
      {
        src: "/images/projects/job-tracker-board.svg",
        alt: "Job Tracker pipeline board with applications grouped by saved, applied, interview, and offer status.",
      },
    ],
    problem:
      "Job seekers often track applications across spreadsheets, email, calendars, and memory. That fragmentation makes follow-ups inconsistent and makes it difficult to understand progress.",
    solution:
      "The product centralizes the complete application lifecycle with structured records, status workflows, search, reminders, and simple analytics. The interface prioritizes quick updates so maintaining the tracker never becomes another job.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    architecture: [
      "React client with protected routes and reusable dashboard components",
      "Express REST API organized by authentication, jobs, and analytics domains",
      "MongoDB collections for users and normalized application records",
      "JWT access control with server-side validation and ownership checks",
    ],
    features: [
      "Secure account authentication",
      "Application CRUD and status pipeline",
      "Search, filters, sorting, and pagination",
      "Dashboard analytics and recent activity",
      "Responsive mobile workflow",
      "Validation and consistent API errors",
    ],
    challenges: [
      {
        title: "Keeping filters predictable",
        copy: "Query state is modeled explicitly so search, status, sort, and pagination can be combined without stale results.",
      },
      {
        title: "Protecting user-owned data",
        copy: "Every mutation is scoped by both resource ID and authenticated owner instead of trusting client-provided identifiers.",
      },
    ],
    impact: [
      { value: "1 view", label: "Complete application pipeline" },
      { value: "< 3 steps", label: "Typical status update" },
      { value: "Mobile-first", label: "Responsive workflow" },
    ],
    github: "https://github.com/kanwar05",
    liveDemo: null,
  },
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    eyebrow: "Production portfolio case study",
    summary:
      "A responsive personal brand platform combining polished storytelling, project case studies, GitHub activity, and a secure contact-management workflow.",
    status: "Live full-stack application",
    image: "/images/projects/portfolio-home.svg",
    gallery: [
      {
        src: "/images/projects/portfolio-home.svg",
        alt: "Portfolio homepage preview with developer introduction, project call to action, and profile image.",
      },
      {
        src: "/images/projects/portfolio-admin.svg",
        alt: "Portfolio admin dashboard preview showing contact message statistics and inbox management.",
      },
    ],
    problem:
      "A conventional portfolio can look polished while offering little evidence of backend skill, product thinking, or maintainable architecture.",
    solution:
      "This project treats the portfolio as a real application: routed case studies, accessible theming, a MongoDB contact pipeline, JWT-protected administration, GitHub integration, testing, and automated quality checks.",
    stack: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "Express", "MongoDB"],
    architecture: [
      "React Router separates public case studies and protected admin workflows",
      "Reusable theme and metadata hooks manage presentation and SEO",
      "Express API exposes contact, admin, and cached GitHub resources",
      "MongoDB persists enquiries with lifecycle statuses",
    ],
    features: [
      "Responsive dark and light themes",
      "Animated case-study routes",
      "Database-backed contact form",
      "JWT-protected message dashboard",
      "Cached GitHub activity",
      "SEO metadata, sitemap, and structured data",
    ],
    challenges: [
      {
        title: "Balancing motion and accessibility",
        copy: "Animations enhance hierarchy while reduced-motion preferences disable non-essential movement.",
      },
      {
        title: "Keeping the code recruiter-friendly",
        copy: "Data, routes, services, UI sections, and API domains are separated so the repository is quick to understand.",
      },
    ],
    impact: [
      { value: "Full stack", label: "Frontend, API, and database" },
      { value: "2 themes", label: "Persistent accessible appearance" },
      { value: "CI ready", label: "Automated quality gates" },
    ],
    github: "https://github.com/kanwar05",
    liveDemo: "/",
  },
  {
    slug: "dsa-lab",
    title: "DSA Practice Lab",
    eyebrow: "Engineering foundations case study",
    summary:
      "A structured problem-solving repository that turns algorithm practice into searchable, documented, and reusable learning material.",
    status: "Ongoing learning system",
    image: "/images/projects/dsa-lab.svg",
    gallery: [
      {
        src: "/images/projects/dsa-lab.svg",
        alt: "DSA Practice Lab interface showing solved problems grouped by topic and difficulty.",
      },
      {
        src: "/images/projects/dsa-code.svg",
        alt: "Algorithm solution detail showing C++ code, complexity analysis, and implementation notes.",
      },
    ],
    problem:
      "Solving isolated coding questions can produce activity without durable learning. Solutions become hard to revisit when they lack consistent naming, explanations, and complexity notes.",
    solution:
      "The lab organizes solutions by topic and pattern, with clear problem summaries, approaches, implementation code, and time-space complexity analysis.",
    stack: ["C++", "Algorithms", "Data Structures", "Markdown", "GitHub Actions"],
    architecture: [
      "Topic-oriented directories for arrays, trees, graphs, dynamic programming, and more",
      "Consistent solution templates with approach and complexity documentation",
      "Automated compile checks for committed C++ solutions",
      "Index metadata for searching by pattern and difficulty",
    ],
    features: [
      "100+ problem-solving exercises",
      "Topic and pattern organization",
      "Complexity analysis",
      "Alternative approaches where useful",
      "Consistent documentation",
      "Automated validation workflow",
    ],
    challenges: [
      {
        title: "Learning patterns, not answers",
        copy: "Solutions emphasize reusable reasoning patterns and trade-offs instead of only storing accepted code.",
      },
      {
        title: "Maintaining consistency",
        copy: "A shared template keeps naming, explanation depth, and complexity notation uniform as the collection grows.",
      },
    ],
    impact: [
      { value: "100+", label: "Problems practiced" },
      { value: "Core DSA", label: "Patterns documented" },
      { value: "Repeatable", label: "Learning workflow" },
    ],
    github: "https://github.com/kanwar05",
    liveDemo: null,
  },
];

export const getCaseStudy = (slug) => caseStudies.find((project) => project.slug === slug);
