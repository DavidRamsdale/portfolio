export interface Skill {
  title: string;
  level: number;
}

export const Frontend: Skill[] = [
  { title: "React", level: 90 },
  { title: "Typescript", level: 80 },
  { title: "Javascript", level: 80 },
  { title: "HTML", level: 90 },
  { title: "CSS", level: 90 },
  { title: "Tailwind", level: 80 },
  { title: "Sass", level: 70 },
  { title: "Next.js", level: 80 },
  { title: "Graphql", level: 70 },
  { title: "Mobx", level: 70 },
  { title: "Redux", level: 70 },
];

export const Backend: Skill[] = [
  { title: "Nest.js", level: 70 },
  { title: "Node.js", level: 80 },
  { title: "MongoDB", level: 70 },
  { title: "SQL", level: 70 },
  { title: "Express", level: 70 },
];

export const Testing: Skill[] = [
  { title: "Cypress", level: 70 },
  { title: "Jest", level: 70 },
  { title: "Mocha", level: 70 },
];
