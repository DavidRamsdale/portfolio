import { PageSection } from "@/components/PageSection";
import { SkillSection } from "@/components/SkillSection";
import { Backend, Frontend, Testing } from "@/constants";

export const Skills = () => {
  return (
    <PageSection>
      <div className="">
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
