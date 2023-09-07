import React from 'react';
import Education from './Education';
import Skills from './Skills';

const Overview = () => {
  return (
    <div className="mb-12 flex w-full flex-col gap-4 md:flex-row">
      <Education />
      <Skills />
    </div>
  );
};

export default Overview;
