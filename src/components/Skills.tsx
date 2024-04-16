import { PageSection } from "@/components/common/PageSection";
import { SkillColumn } from "@/components/SkillColumn";
import { Backend, Frontend, Other, Testing } from "@/constants";

export const Skills = () => {
  return (
    <PageSection id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SkillColumn title="Frontend" skills={Frontend} />
        <SkillColumn title="Backend" skills={Backend} />
        <SkillColumn title="Testing" skills={Testing} />
        <SkillColumn title="Other" skills={Other} />
      </div>
    </PageSection>
  );
};
