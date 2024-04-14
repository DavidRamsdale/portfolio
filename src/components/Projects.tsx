import { PageSection } from "@/components/common/PageSection";
import { Card } from "@/components/Card";
import SectionTitle from "./common/SectionTitle";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  githubLink: string;
  liveSiteLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "alt",
    githubLink: "https://github.com/user/project1",
    liveSiteLink: "https://project1.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 4",
    description: "This is a description of Project 1.",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "alt",
    githubLink: "https://github.com/user/project1",
    liveSiteLink: "https://project1.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 3",
    description: "This is a description of Project 1.",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "alt",
    githubLink: "https://github.com/user/project1",
    liveSiteLink: "https://project1.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 4",
    description: "This is a description of Project 1.",
    imageUrl: "https://placehold.co/600x400",
    imageAlt: "alt",
    githubLink: "https://github.com/user/project1",
    liveSiteLink: "https://project1.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export const Projects = () => {
  return (
    <PageSection id="projects">
      <div>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card project={project} key={index} delay={0.3 * index} />
          ))}
        </div>
      </div>
    </PageSection>
  );
};
