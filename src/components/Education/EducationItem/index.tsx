import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  last?: boolean;
  title: string;
  description: string;
  years: string;
};

const EducationItem = ({
  src,
  alt,
  last = false,
  title,
  years,
  description,
}: Props) => {
  const lineCss =
    'after:mx-auto after:my-2 after:block after:h-10 after:w-[1px] after:rounded-full after:bg-slate-300/20 after:shadow-sm after:shadow-slate-800/5 after:backdrop-blur';

  return (
    <div className="flex w-full flex-row gap-4 p-1">
      <div className={`${last ? '' : lineCss}`}>
        <div className="pretty-ring row p-1 self-start rounded-full">
          <Image src={src} width={24} height={24} alt={alt} />
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full flex-row justify-between">
          <h1 className="text-md font-semibold text-slate-300/90">{title}</h1>
          <p className="text-xs font-bold text-slate-600">{years}</p>
        </div>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default EducationItem;
