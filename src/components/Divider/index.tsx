import React from 'react';

const Divider = () => {
  return (
    <div className="mix-blend relative z-10 flex h-[1px] w-[90%] justify-center self-center bg-gradient-to-r from-slate-950 via-indigo-500/80 to-slate-950">
      <div className="absolute top-0 h-[2px] w-[40%] bg-gradient-to-r from-slate-950 via-indigo-500 to-slate-950 blur-md" />
    </div>
  );
};

export default Divider;
