import { PageSection } from "@/components/PageSection";
import { SkillSection } from "@/components/SkillSection";

export interface Skill {
  title: string;
  level: number;
}

const Frontend: Skill[] = [
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

const Backend: Skill[] = [
  { title: "Nest.js", level: 70 },
  { title: "Node.js", level: 80 },
  { title: "MongoDB", level: 70 },
  { title: "SQL", level: 70 },
  { title: "Express", level: 70 },
];

const Testing: Skill[] = [
  { title: "Cypress", level: 70 },
  { title: "Jest", level: 70 },
  { title: "Mocha", level: 70 },
];

export const Skills = () => {
  return (
    <PageSection>
      <div>
        <h1 className="text-5xl text-center font-bold pb-6">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillSection title="Frontend" skills={Frontend} />
          <SkillSection title="Backend" skills={Backend} />
          <SkillSection title="Testing" skills={Testing} />
        </div>
      </div>
    </PageSection>
  );
};
