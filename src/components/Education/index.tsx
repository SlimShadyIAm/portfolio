import Image from 'next/image';
import React from 'react';
import EducationItem from './EducationItem';

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="self-start">
      <EducationItem src="/images/dtu.svg" alt="DTU Logo" />
      <EducationItem src="/images/twente.svg" alt="UT Logo" />
    </div>
  );
};

export default Education;
