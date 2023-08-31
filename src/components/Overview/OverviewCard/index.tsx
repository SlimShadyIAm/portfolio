import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const OverviewCard = ({ children }: Props) => {
  return (
    <div className="pretty-ring relative flex flex-1 flex-col self-start overflow-hidden rounded-md p-6 h-full">
      <div className="absolute mt-[-20px] h-4 w-[75%] self-center rounded-full bg-indigo-500 blur-3xl" />
      {children}
    </div>
  );
};

export default OverviewCard;
