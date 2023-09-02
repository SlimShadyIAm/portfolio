import React from 'react';

type Props = {
  text: string;
};

const ProjectSkillBadge = ({ text }: Props) => {
  return (
    <div className="pretty-ring bg-slate-700/5 flex items-center gap-2 self-start rounded-full px-3 py-1 text-sm text-slate-200/80">
      {text}
    </div>
  );
};

export default ProjectSkillBadge;
