import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
};

const SkillBadge = ({ name }: Props) => {
  return (
    <div className="pretty-ring bg-slate-700/5 flex items-center gap-2 self-start rounded-full px-1.5 py-1.5 pr-3 text-sm text-slate-200/80">
     <Image className='pretty-ring rounded-full' src={`/images/logos/${name.toLowerCase()}.svg`} width={28} height={28} alt={`${name} logo`}/>
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;
