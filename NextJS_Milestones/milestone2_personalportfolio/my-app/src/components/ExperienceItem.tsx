import Image from 'next/image';

interface ExperienceItemProps {
  company: string;
  logoUrl: string;
  role: string;
  duration: string;
}

export default function ExperienceItem({ company, logoUrl, role, duration }: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <Image src={logoUrl} alt={`${company} Logo`} width={100} height={100} />
      <div>
        <h3>{company}</h3>
        <p>Role: {role}</p>
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
}
