import { PageSection } from "@/components/common/PageSection";
import { Card } from "@/components/Card";
import { SectionTitle } from "./common/SectionTitle";
import { projects } from "@/constants";

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
