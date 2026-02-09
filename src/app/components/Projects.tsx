"use clinet";

import { featuredProjects } from "@/contents/projects";

import MyFeaturedProject from "./MyFeaturedProject";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        My Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {featuredProjects.map((project, index) => (
          <article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <MyFeaturedProject project={project} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
