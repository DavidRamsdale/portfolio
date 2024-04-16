import { motion } from "framer-motion";
import { PageSection } from "@/components/common/PageSection";
import { SectionTitle } from "./common/SectionTitle";
import { fadeInText } from "@/utils/motion";

export const About = () => {
  return (
    <PageSection id="about" className="pt-10">
      <SectionTitle title="About Me" />
      <motion.p
        className="text-lg pb-2"
        initial={{ opacity: 0 }}
        variants={fadeInText()}
      >
        I'm a full-stack developer who's always hungry for new tech. With over 5
        years of web development experience, I've honed my skills in crafting
        slick frontends and robust backends.
      </motion.p>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        variants={fadeInText()}
      >
        I love learning and challenging myself, and right now, I'm diving into
        the world of 3D on the web with three.js. It's been a blast adding that
        extra dimension to my projects!
      </motion.p>
    </PageSection>
  );
};
