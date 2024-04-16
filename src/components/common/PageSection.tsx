import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const PageSection = ({ children, className, id }: PageSectionProps) => {
  return (
    <motion.section
      initial="hidden"
      variants={staggerContainer()}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`container pb-10 ${className}`}
      style={{ scrollMarginTop: "62px" }}
      id={id}
    >
      {children}
    </motion.section>
  );
};
