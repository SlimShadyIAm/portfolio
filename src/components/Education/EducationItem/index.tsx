import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  last?: boolean;
  // title: string;
  // description: string;
  // years: string;
};

const EducationItem = ({
  src,
  alt,
  last = false, // title,
  // years,
} // description,
: Props) => {
  // const lineCss =
  //   'after:mx-auto after:my-2 after:block after:h-10 after:w-[1px] after:rounded-full after:bg-slate-300/20 after:shadow-sm after:shadow-slate-800/5 after:backdrop-blur';

  const lineCss = '';
  return (
    <div className={`flex flex-row ${last ? '' : lineCss}`}>
      <div className="pretty-ring row self-start rounded-full p-1">
        <Image src={src} width={24} height={24} alt={alt} />
      </div>
      <div>
        <h1>DTU</h1>
        <p>2020-2020</p>
      </div>
    </div>
  );
};

export default EducationItem;
