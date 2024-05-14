import { Project, Skill } from "./types";

export const Frontend: Skill[] = [
  { title: "Javascript", level: 100 },
  { title: "Typescript", level: 90 },
  { title: "React", level: 90 },
  { title: "Next.js", level: 90 },
  { title: "HTML", level: 90 },
  { title: "CSS", level: 90 },
  { title: "Tailwind", level: 90 },
  { title: "Sass", level: 70 },
  { title: "Mobx", level: 90 },
  { title: "Zustand", level: 80 },
  { title: "Redux", level: 70 },
];

export const Backend: Skill[] = [
  { title: "Node.js", level: 90 },
  { title: "Nest.js", level: 80 },
  { title: "MongoDB", level: 80 },
  { title: "Graphql", level: 80 },
  { title: "SQL", level: 60 },
  { title: "Express", level: 70 },
];

export const Testing: Skill[] = [
  { title: "Cypress", level: 70 },
  { title: "Jest", level: 70 },
  { title: "Mocha", level: 50 },
  { title: "Chai", level: 50 },
  { title: "PlayWright", level: 70 },
];

export const Other: Skill[] = [
  { title: "AWS", level: 50 },
  { title: "Storybook", level: 50 },
  { title: "Figma", level: 80 },
  { title: "Zeplin", level: 50 },
];

export const experienceData = [
  {
    date: "Sep 2019 - Feb 2024",
    title: "Full Stack Engineer",
    company: "My Muscle Chef",
    description:
      "I've contributed to client-facing and backend systems with diverse projects, like integrating Salesforce, implementing DatoCMS for content management, creating APIs, using Plasmic for dynamic landing pages, and a full frontend rewrite with Next.js, showcasing my versatility and innovation.",
  },
  {
    date: "Feb 2019 - Jun 2019",
    title: "Front End Developer",
    company: "Laava",
    description:
      "I led the enhancement of frontend applications for both the website and dashboard using React. I spearheaded the website's transformation by rewriting and redesigning its main page and several others to align with provided design templates, demonstrating my proficiency in frontend development and design implementation.",
  },
  {
    date: "Oct 2018 - Feb 2019",
    title: "Front End Developer",
    company: "Investing For Charity",
    description:
      "Creating a brand-new website, leveraging React for frontend development and integrating Keystone CMS for seamless content management.",
  },
];

export const projects: Project[] = [
  {
    title: "AI Journal",
    description:
      "Leverage AI to analyze and understand your mood based on your journal entries",
    imageUrl: "./images/ai_journal.png",
    imageAlt: "Ai Journal",
    githubLink: "https://github.com/DavidRamsdale/ai-journal",
    liveSiteLink:
      "https://ai-journal-on8ztqxad-david-ramsdales-projects.vercel.app/",
    tags: ["Nextjs", "Typescript", "OpenAI", "Clerk", "Prisma", "Langchain"],
  },
  {
    title: "Portfolio Site Version 2",
    description:
      "The second iteration of my portfolio site, showcasing my latest projects and skills.",
    imageUrl: "./images/portfolio_v2.png",
    imageAlt: "Portfolio Site V2",
    githubLink: "https://github.com/DavidRamsdale/portfolio",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Royal Clothing",
    description: "E-commerce clothing store",
    imageUrl: "./images/royal_clothing.png",
    imageAlt: "Royal Clothing",
    githubLink: "https://github.com/DavidRamsdale/royal_clothing",
    tags: [
      "React",
      "Javascript",
      "Styled Components",
      "Redux",
      "Firebase",
      "Stripe",
    ],
  },
  {
    title: "Portfolio Site Version 1",
    description:
      "My first portfolio site, a simple yet effective showcase of my initial projects and skills.",
    imageUrl: "./images/portfolio_v1.png",
    imageAlt: "Portfolio Site V1",
    githubLink: "https://github.com/DavidRamsdale/Portfolio-Page",
    liveSiteLink: "https://davidramsdale.github.io/Portfolio-Page/",
    tags: ["HTML", "CSS"],
  },
];
