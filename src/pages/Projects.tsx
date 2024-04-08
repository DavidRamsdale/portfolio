import { PageSection } from "@/components/PageSection";
import { Card } from "@/components/Card";

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
    <PageSection>
      <div>
        <h1 className="text-5xl text-center font-bold pb-6 md:pb-10">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
      </div>
    </PageSection>
  );
};
