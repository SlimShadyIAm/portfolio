import React from 'react';
import { GraduationCap } from 'lucide-react';
import EducationItem from './EducationItem';
import OverviewCard from '@/components/OverviewCard';

const Education = () => {
  return (
    <OverviewCard icon={GraduationCap} title="Education">
      <EducationItem
        src="/images/logos/dtu.svg"
        alt="DTU Logo"
        title="Technical University of Denmark"
        location="Copenhagen, Denmark"
        years="2021 – Current"
        description="MSc. Computer Science and Engineering (spec. Software Engineering)"
      />
      <EducationItem
        last
        src="/images/logos/twente.svg"
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
