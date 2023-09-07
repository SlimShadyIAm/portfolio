import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  last?: boolean;
  title: string;
  description: string;
  years: string;
  location: string;
};

const EducationItem = ({
  src,
  alt,
  last = false,
  title,
  years,
  description,
  location,
}: Props) => {
  const lineCss =
    'after:mx-auto after:my-2 after:block after:h-24 after:sm:h-12 after:md:h-16 after:lg:h-12 after:w-[1px] after:rounded-full after:bg-slate-300/20 after:shadow-sm after:shadow-slate-800/5 after:backdrop-blur';

  return (
    <div className="flex w-full flex-row gap-4 p-1">
      <div className={`${last ? '' : lineCss}`}>
        <div className="pretty-ring row self-start rounded-full p-1">
          <Image src={src} width={24} height={24} alt={alt} />
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-md font-semibold text-slate-300/90">{title}</h1>
        <p className="text-xs font-semibold text-slate-500">
          {location} &#x2022; {years}
        </p>
        <p className="text-sm text-slate-400/90">{description}</p>
      </div>
    </div>
  );
};

export default EducationItem;
