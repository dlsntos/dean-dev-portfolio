import Button from "./button";

interface ProjectCardProps {
  projectTitle: string;
  projectLink: string;
}
export default function ProjectCard({
  projectTitle,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="h-auto min-w-[10dvh] md:max-w-[30dvw] rounded-lg bg-gray-100 drop-shadow-xl drop-shadow-gray-300">
      <h3 className="text-center text-3xl pt-5">{projectTitle}</h3>
      <div className="flex justify-center w-full h-52 min-w-10 p-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
          alt=""
          className="w-full h-full object-cover rounded-sm shadow-md shadow-mauve-200"
        />
      </div>
      <p className="px-10 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor
        ultricies ex, sed varius dolor venenatis non. Phasellus velit neque,
        facilisis non egestas a, rhoncus ut neque. Proin iaculis elit vitae odio
        hendrerit, sed dictum velit mattis. Nullam vel justo sed massa efficitur
        tempor.
      </p>
      <div className="p-10">
        <Button link={projectLink} label="View Github" />
      </div>
    </div>
  );
}
