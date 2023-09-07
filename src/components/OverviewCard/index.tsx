import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: LucideIcon;
  title: string;
};

const OverviewCard = ({ children, icon: Icon, title }: Props) => {
  return (
    <div className="pretty-ring relative flex flex-col self-start overflow-hidden rounded-md p-6 md:h-full md:flex-1">
      <div className="translate-3d absolute mt-[-20px] h-4 w-[75%] self-center rounded-full bg-indigo-500 blur-3xl" />
      <div className="align-center mb-6 flex flex-row gap-4 self-start">
        <Icon className="fill-slate-600/75 text-sm text-slate-400/75" />
        <h2 className="font-medium text-slate-200/90">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default OverviewCard;
