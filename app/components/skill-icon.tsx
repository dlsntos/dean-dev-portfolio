interface SkillIconProps {
  icon: React.ReactNode;
  iconName: string;
}

export default function SkillIcon({ icon, iconName }: SkillIconProps) {
  return (
    <div className="inline-flex items-center text-sm text-white bg-gray-800 px-5 py-1 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-105">
      {icon} {iconName}
    </div>
  );
}
