import Image from 'next/image';
import React from 'react';
import { Skill } from '@/components/sections/Overview/Skills';

type Props = {
  skill: Skill;
};

const SkillBadge = ({ skill }: Props) => {
  return (
    <div className="pretty-ring flex items-center gap-2 self-start rounded-full bg-slate-700/5 px-1.5 py-1.5 pr-3 text-sm text-slate-200/80">
      <Image
        className="rounded-full"
        src={`/images/logos/${skill.icon}`}
        width={28}
        height={28}
        alt={`${skill.icon} logo`}
      />
      <span>{skill.name}</span>
    </div>
  );
};

export default SkillBadge;
