import React from 'react';

const Divider = () => {
  return (
    <div className="h-[1px] w-[90%] self-center bg-gradient-to-r from-slate-950 via-indigo-500/80 to-slate-950 mix-blend relative flex justify-center z-10" >
      <div className='absolute h-1 w-[40%] bg-gradient-to-r from-slate-950 via-indigo-500 to-slate-950 top-0 blur-md' />
    </div>
  );
};

export default Divider;
