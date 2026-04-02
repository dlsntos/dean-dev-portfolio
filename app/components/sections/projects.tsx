import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="py-10 mt-50 w-full max-w-7xl mx-auto">
        <h2 className="text-center text-5xl">Projects</h2>
        <div className="mt-20 grid grid-cols-3 gap-5">
          <ProjectCard projectTitle="Project 1" projectLink="" />
          <ProjectCard projectTitle="Project 2" projectLink="" />
          <ProjectCard projectTitle="Project 3" projectLink="" />
        </div>
      </div>
    </section>
  );
}
