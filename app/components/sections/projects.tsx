import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="py-10 mt-50 w-full md:max-w-7xl mx-auto">
        <h2 className="text-center text-5xl">Projects</h2>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
          <ProjectCard
            projectTitle="BCRemit OJT project"
            projectLink="https://github.com/dlsntos/bcremit-clone-website-project"
          />
          <ProjectCard
            projectTitle="Smart Target Thesis Project"
            projectLink="https://github.com/dlsntos/smart-target-frontend"
          />
          <ProjectCard
            projectTitle="Dali Inventory App (Unofficial)"
            projectLink="https://github.com/GuilianiHatsu1k1314/apsi_inventory_app"
          />
        </div>
      </div>
    </section>
  );
}
