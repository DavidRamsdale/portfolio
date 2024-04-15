import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { PageSection } from "@/components/common/PageSection";
import { SectionTitle } from "./common/SectionTitle";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageSection id="about" className="pt-10">
      <SectionTitle title="About Me" />
      <motion.p
        ref={ref}
        className="text-md"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am a full-stack developer with a passion for learning and implementing
        new technologies. I have experience in JavaScript, TypeScript, React,
        and other modern web technologies.
      </motion.p>
    </PageSection>
  );
};
