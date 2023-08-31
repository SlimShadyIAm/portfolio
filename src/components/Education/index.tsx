import Image from 'next/image';
import React from 'react';
import EducationItem from './EducationItem';
import { Briefcase } from 'lucide-react';

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="pretty-ring flex w-full flex-col items-start justify-center self-start rounded-md p-4 gap-4">
      <div className="align-center ml-1 flex flex-row gap-4 self-start">
        <Briefcase className="fill-slate-600/75 text-sm text-slate-400/75" />
        <h2 className="text-slate-200/50">Education</h2>
      </div>
      <EducationItem src="/images/dtu.svg" alt="DTU Logo" />
      <EducationItem src="/images/twente.svg" alt="UT Logo" last />
    </div>
  );
};

export default Education;
