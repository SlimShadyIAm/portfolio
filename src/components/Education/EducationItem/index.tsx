import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt: string;
};

const EducationItem = ({ src, alt }: Props) => {
  return (
    <div className="pretty-ring rounded-full p-1">
      <Image src={src} width={24} height={24} alt={alt} />
    </div>
  );
};

export default EducationItem;
