"use client";

interface ButtonProps {
  label: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}
export default function Button({
  label,
  link,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
  hoverTextColor,
}: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`p-3 rounded-xl ${backgroundColor || "bg-gray-700"} ${textColor || "text-white"} shadow-md ${hoverBackgroundColor || "hover:bg-white"} ${hoverTextColor || "hover:text-black"} transition duration-300 cursor-pointer`}
    >
      {label}
    </a>
  );
}
