import React from "react";

interface Project {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  githubLink: string;
  liveSiteLink: string;
  tags: string[];
}

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="p-4 bg-white border rounded transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl origin-bottom">
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
    </div>
  );
};
