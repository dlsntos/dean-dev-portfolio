interface SkillIconProps {
  icon: React.ReactNode;
  iconName: string;
}

export default function SkillIcon({ icon, iconName }: SkillIconProps) {
  return (
    <div className="inline-flex items-center text-sm text-white bg-gray-800 px-5 py-1 rounded-full">
      {icon} {iconName}
    </div>
  );
}
