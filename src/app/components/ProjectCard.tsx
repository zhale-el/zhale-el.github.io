import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <>
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-5 mt-2">
        <Link
          href={project.githubLink}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <FaGithub className="w-5 h-5" /> <span>Code</span>
        </Link>

        <Link
          href={project.demoLink}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
        </Link>
      </div>
    </>
  );
};
export default ProjectCard;
