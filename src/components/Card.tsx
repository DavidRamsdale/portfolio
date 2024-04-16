import { motion } from "framer-motion";
import { Project } from "@/constants/types";
import { Button } from "./common/Button";
import { fadeInFromTopVariant } from "@/utils/motion";

interface CardProps {
  project: Project;
  delay: number;
}

export const Card: React.FC<CardProps> = ({ project, delay }) => {
  return (
    <motion.div
      className="relative p-4 bg-white border rounded transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl origin-bottom"
      initial={{ y: 50, opacity: 0 }}
      variants={fadeInFromTopVariant(delay)}
    >
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        loading="lazy"
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-4 flex flex-col items-between h-full">
        <div>
          <h2 className="text-xl font-bold pb-2">{project.title}</h2>
          <p className="pb-3">{project.description}</p>
          <div className="flex flex-wrap items-start mb-4 min-h-[76px]">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-600 border rounded-full py-1 px-2 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            className="cursor-pointer text-blue-600"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <Button>
            <a
              className=""
              href={project.liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
