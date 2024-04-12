import { motion } from "framer-motion";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const PageSection = ({ children, className, id }: PageSectionProps) => {
  return (
    <motion.section
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
            delayChildren: 0.5,
          },
        },
      }}
      initial="hidden"
      className={`container pb-10 ${className}`}
      id={id}
    >
      {children}
    </motion.section>
  );
};
