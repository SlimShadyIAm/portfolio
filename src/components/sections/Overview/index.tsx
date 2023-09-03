import React from 'react';
import Education from './Education';
import Skills from './Skills';

const Overview = () => {
  return (
    <div className="flex w-full flex-row gap-4">
      <Education />
      <Skills />
    </div>
  );
};

export default Overview;
