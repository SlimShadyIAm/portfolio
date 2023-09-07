import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const DialogSection = ({ title, children }: Props) => {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold uppercase text-indigo-400">
        {title}
      </h2>
      <div className="text-md mb-3 flex flex-col gap-2 text-slate-300/90">
        {children}
      </div>
    </div>
  );
};

export default DialogSection;
