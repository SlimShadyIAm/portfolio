import React from 'react';
import { Sparkles } from 'lucide-react';
import SkillBadge from './SkillBadge';
import OverviewCard from '../OverviewCard';

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
    <OverviewCard>
      <div className="align-center mb-6 flex flex-row gap-4 self-start">
        <Sparkles className="fill-slate-600/75 text-sm text-slate-400/75" />
        <h2 className="font-medium text-slate-200/90">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2 p-1">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </OverviewCard>
  );
};

export default Skills;
