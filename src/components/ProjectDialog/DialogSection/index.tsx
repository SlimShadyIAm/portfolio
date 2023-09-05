import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const DialogSection = ({ title, children }: Props) => {
  return (
    <div>
      <h2 className="mb-2 text-sm font-semibold uppercase text-slate-200">
        {title}
      </h2>
      <div className="flex flex-col gap-2 text-md text-slate-300/90 mb-2">
        {children}
      </div>
    </div>
  );
};

export default DialogSection;
