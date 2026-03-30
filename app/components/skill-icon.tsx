interface SkillIconProps {
  icon: React.ReactNode;
  iconName: string;
}

export default function SkillIcon({ icon, iconName }: SkillIconProps) {
  return (
    <div>
      ${icon} ${iconName}
    </div>
  );
}
