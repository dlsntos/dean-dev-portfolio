"use client";

interface ButtonProps {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    onClick: () => void;
}
export default function Button({ label, backgroundColor, textColor, hoverBackgroundColor, hoverTextColor , onClick}: ButtonProps){
    return(
        <button onClick={onClick} className={`p-3 rounded-xl ${backgroundColor || 'bg-blue-700'} ${textColor || 'text-white'} shadow-md ${hoverBackgroundColor || "hover:bg-white"} ${hoverTextColor || "hover:text-black"} transition duration-300 cursor-pointer`}>
            {label}
        </button>
    )
};