import React from 'react';
import { Sparkles } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';
import OverviewCard from '@/components/OverviewCard';

const Skills = () => {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Jest',
    'Cypress',
    'TailwindCSS',
    'HTML',
    'CSS',
    'Python',
    "Java",
    'Figma',
    "Git",
    "Docker",
    "SQL",
    "Vim",
    "Linux",
  ];

  return (
    <OverviewCard icon={Sparkles} title="Skills">
      <div className="flex flex-wrap gap-3 p-1">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </OverviewCard>
  );
};

export default Skills;
