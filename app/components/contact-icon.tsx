interface ContactIconProps {
  icon: React.ReactNode;
  contactLink: string;
}

export default function ContactIcon({ icon, contactLink }: ContactIconProps) {
  return (
    <div className="rounded-full bg-white p-5 transition duration-200 ease-in-out hover:-translate-y-2 hover:bg-gray-700 hover:shadow-xl hover:shadow-gray-600">
      <a href={contactLink}>{icon}</a>
    </div>
  );
}
