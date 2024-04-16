import { fadeInFromTopVariant } from "@/utils/motion";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <motion.h2
      className={`text-4xl font-semibold pb-4 z-30 ${className}`}
      variants={fadeInFromTopVariant(0.5)}
    >
      {title}
    </motion.h2>
  );
};
