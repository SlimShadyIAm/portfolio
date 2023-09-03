import React from 'react';
import EducationItem from './EducationItem';
import { Briefcase } from 'lucide-react';
import OverviewCard from '@/components/OverviewCard';

const Education = () => {
  return (
    <OverviewCard icon={Briefcase} title="Education">
      <EducationItem
        src="/images/dtu.svg"
        alt="DTU Logo"
        title="Technical University of Denmark"
        location="Copenhagen, Denmark"
        years="2021 – Current"
        description="MSc. Computer Science and Engineering (spec. Software Engineering)"
      />
      <EducationItem
        last
        src="/images/twente.svg"
        alt="UT Logo"
        title="University of Twente"
        location="Enschede, The Netherlands"
        years="2018 – 2020"
        description="BSc. Technical Computer Science"
      />
    </OverviewCard>
  );
};

export default Education;
