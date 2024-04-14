import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Project } from "@/constants/types";

interface CardProps {
  project: Project;
  delay: number;
}

export const Card: React.FC<CardProps> = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="p-4 bg-white border rounded transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl origin-bottom"
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", delay }}
    >
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        loading="lazy"
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p>{project.description}</p>
        <div className="flex flex-wrap space-x-2 mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-gray-600 border rounded-full py-1 px-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          className="cursor-pointer"
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="cursor-pointer"
          href={project.liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>
    </motion.div>
  );
};
