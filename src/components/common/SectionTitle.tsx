import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  console.log("🚀 ~ SectionTitle ~ inView:", inView);

  return (
    <motion.h2
      ref={ref}
      className="text-4xl font-semibold pb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, type: "spring", delay: 0.7 }}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
