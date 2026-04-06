import Button from "./button";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  projectTitle: string;
  projectLink: string;
  projectDescription: string;
  image: string | StaticImageData;
}
export default function ProjectCard({
  projectTitle,
  projectLink,
  projectDescription,
  image,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col h-auto min-w-[10dvh] md:max-w-[30dvw] rounded-lg bg-gray-100 drop-shadow-xl drop-shadow-gray-300">
      <h3 className="text-center text-3xl pt-5">{projectTitle}</h3>
      <div className="flex justify-center w-full h-52 min-w-10 p-5">
        <Image
          src={image}
          alt=""
          width={50}
          height={50}
          className="w-full h-full object-cover rounded-sm shadow-md shadow-mauve-200"
        />
      </div>
      <p className="px-10 text-justify flex-1">{projectDescription}</p>
      <div className="p-10">
        <Button link={projectLink} label="View Source code" />
      </div>
    </div>
  );
}
