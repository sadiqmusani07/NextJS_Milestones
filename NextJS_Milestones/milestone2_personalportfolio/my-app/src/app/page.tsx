"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Skills from '../components/Skills';
import ExperienceItem from '../components/ExperienceItem';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';

export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skills = [
    { title: 'JavaScript', imageUrl: '/js.png' },
    { title: 'TypeScript', imageUrl: '/ts.png' },
    { title: 'C#', imageUrl: '/csharp.png' },
    { title: 'HTML', imageUrl: '/html.png' },
    { title: 'CSS', imageUrl: '/css.png' },
    { title: 'NEXT.js', imageUrl: '/nextjs.png' },
    { title: 'React.js', imageUrl: '/reactjs.png' },
    { title: 'MS D365 CRM', imageUrl: '/d365.png' },
  ];

  const projects = [
    { title: 'Resume Builder Project', description: 'Build and Interactive Resume Builder Project helping people to create free resumes', imageUrl: '/resume.png' },
    { title: 'Personal Portfolio Project', description: 'A personal portfolio project listing my work and achievements', imageUrl: '/portfolio.png' },
    { title: 'Dynamics 365 Projects', description: 'Created many d365 CRM plugins for model driven apps', imageUrl: '/modeldriven.png' },
  ];

  const experiences = [
    {
      company: 'Maison Consulting and Solution',
      logoUrl: '/maison.png',
      role: 'CRM Customization Consultant',
      duration: 'Dec-2023 - Present',
    },
    {
      company: 'Global ITS',
      logoUrl: '/gits.png',
      role: 'Associate Dynamcis CRM Consultant',
      duration: 'Sep-2022 - Dec-2023',
    },
    {
      company: 'Friends Bit',
      logoUrl: '/fbits.png',
      role: 'Web Developer',
      duration: '5 Months',
    },
    {
      company: 'Liquid Technologies',
      logoUrl: '/liquid.png',
      role: 'Intern React JS Developer',
      duration: '10 Months',
    },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <header>
        <Link href="#top" className="logo">Sadiq M Younus - Portfolio Website</Link>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#future-goals">Future Goals</Link>
        </nav>
      </header>

      <section id="about">
        <h1>About Me</h1>
        <p>I am Sadiq, a passionate developer having hands-on experience in Microsoft Dynamcis CRM as a technical consultant and Web Development especially in react and next. Always eager to learn the keen concepts and the working behind the technologies and apps.</p>
      </section>

      <section id="skills">
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.imageUrl} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-slider">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              logoUrl={exp.logoUrl}
              role={exp.role}
              duration={exp.duration}
            />
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-slider">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section id="future-goals">
        <h2>Future Goals/Plannings</h2>
        <p>My future goal is to learn about the advancement of AI and how it can make the real difference in the uplifting of people life.</p>
      </section>

      <footer>
        <p>© 2024 SADIQ M YOUNUS - My Portfolio Project. All rights reserved</p>
      </footer>
    </div>
  );
}
