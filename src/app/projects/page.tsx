import ProjectCard from "../components/ProjectCard";
import { projects } from "@/contents/projects";

const ProjectsPage = () => {
  return (
    <div className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
      <p className="text-lg text-secondary mb-24 text-center">
        {" "}
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <ProjectCard project={project} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
