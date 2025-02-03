import Card from './Card';

interface Skill {
  title: string;
  imageUrl: string;
}

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-slider">
        {skills.map((skill, index) => (
          <Card key={index} title={skill.title} imageUrl={skill.imageUrl} />
        ))}
      </div>
    </div>
  );
}
