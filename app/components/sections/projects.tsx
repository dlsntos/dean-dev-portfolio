import ProjectCard from "../project-card";
import project1 from "../../assets/bcremit-project.png";
export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="py-10 mt-50 w-full md:max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold">Projects</h2>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-5">
          <ProjectCard
            projectTitle="BCRemit OJT project"
            projectLink="https://github.com/dlsntos/bcremit-clone-website-project"
            projectDescription="This project is a Fullstack Replica of the BCRemit webapp using React(Typescript), ASP.Net, and Postgresql."
            image={project1}
          />
          <ProjectCard
            projectTitle="Smart Target Thesis Project"
            projectLink="https://github.com/dlsntos/smart-target-frontend"
            projectDescription="A Camera Based advertising system for clothing stores using Faster R-CNN and SVM. The techstack used includes React(Javascript), Python(Flask Framework), and Postgresql."
            image={""}
          />
          <ProjectCard
            projectTitle="Dali Inventory App (Unofficial)"
            projectLink="https://github.com/GuilianiHatsu1k1314/apsi_inventory_app"
            projectDescription="A Dali Themed Inventory Management System using React(Typescript), TailwindCSS, and Supabase backend."
            image={""}
          />
        </div>
      </div>
    </section>
  );
}
