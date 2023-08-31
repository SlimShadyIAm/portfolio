import Image from 'next/image';
import React from 'react';
import EducationItem from './EducationItem';
import { Briefcase } from 'lucide-react';

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="pretty-ring flex w-[50%] flex-col self-start rounded-md p-6">
      <div className="align-center mb-6 flex flex-row gap-4 self-start">
        <Briefcase className="fill-slate-600/75 text-sm text-slate-400/75" />
        <h2 className="font-medium text-slate-200/90">Education</h2>
      </div>
        <EducationItem
          src="/images/dtu.svg"
          alt="DTU Logo"
          title="Technical University of Denmark"
          years="2021 – Current"
          description="MSc. Computer Science and Engineering (spec. Software Engineering)"
        />
        <EducationItem
          last
          src="/images/twente.svg"
          alt="UT Logo"
          title="University of Twente"
          years="2018 – 2020"
          description="BSc. Technical Computer Science"
        />
    </div>
  );
};

export default Education;