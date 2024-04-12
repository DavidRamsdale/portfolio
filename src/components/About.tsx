import { PageSection } from "@/components/common/PageSection";
import SectionTitle from "./common/SectionTitle";

export const About = () => {
  return (
    <PageSection id="about" className="pt-10">
      <SectionTitle title="About Me" />
      <p className="text-md">
        I am a full-stack developer with a passion for learning and implementing
        new technologies. I have experience in JavaScript, TypeScript, React,
        and other modern web technologies.
      </p>
    </PageSection>
  );
};
