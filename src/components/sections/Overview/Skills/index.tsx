import React from 'react';
import { Sparkles } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';
import OverviewCard from '@/components/OverviewCard';

export type Skill = { name: string; icon: string };

const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', icon: 'react.png' },
    { name: 'Next.js', icon: 'nextjs.png' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'C#', icon: 'csharp.png' },
    { name: 'Cypress', icon: 'cypress.png' },
    { name: 'TailwindCSS', icon: 'tailwindcss.png' },
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'Python', icon: 'python.png' },
    { name: 'Java', icon: 'java.png' },
    { name: 'Figma', icon: 'figma.png' },
    { name: 'Git', icon: 'git.png' },
    { name: 'Docker', icon: 'docker.png' },
    { name: 'SQL', icon: 'sql.png' },
    { name: 'Vim', icon: 'vim.png' },
    { name: 'Linux', icon: 'linux.png' },
  ];

  return (
    <OverviewCard icon={Sparkles} title="Skills">
      <div className="flex flex-wrap gap-3 p-1">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </OverviewCard>
  );
};

export default Skills;
