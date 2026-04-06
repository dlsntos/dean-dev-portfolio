"use client";

interface ButtonProps {
  label: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  newTab?: boolean;
}
export default function Button({
  label,
  link,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
  newTab = false,
}: ButtonProps) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : undefined}
      className={`p-3 rounded-xl ${backgroundColor || "bg-gray-700"} ${textColor || "text-white"} shadow-md ${hoverBackgroundColor || "hover:bg-white"} ${hoverTextColor || "hover:text-black"} transition duration-300 cursor-pointer`}
    >
      {label}
    </a>
  );
}
