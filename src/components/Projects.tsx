import ProjectCard from "./projects/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-40"
    >
      <div
        className="mx-auto max-w-7xl px-6"
      >
        <h2
          className="text-5xl font-bold "
        >
          Selected Work
        </h2>
      </div>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </section>
  );
}