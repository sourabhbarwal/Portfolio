import ProjectCard from "./projects/ProjectCard";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <Reveal>
    <section
      id="projects"
      className="py-52"
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <p
          className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-neutral-500
          "
        >
          Selected Work
        </p>

        <h2
          className="
          mt-8

          text-6xl
          font-bold

          md:text-8xl
          "
        >
          Projects
        </h2>

        <p
          className="
          mt-8

          max-w-3xl

          text-xl

          text-neutral-600
          "
        >
          A collection of projects
          focused on cloud, DevOps,
          mobile applications and
          scalable systems.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </section>
    </Reveal>
  );
}