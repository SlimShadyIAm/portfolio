import React from 'react';

type Props = {
  skills: string[];
};

const ProjectSkillBadges = ({ skills }: Props) => {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {skills.map((skill) => (
        <p className="text-xs uppercase text-slate-300/90" key={skill}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default ProjectSkillBadges;
