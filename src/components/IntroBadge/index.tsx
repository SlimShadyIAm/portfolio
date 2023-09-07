import { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  text: string;
};

const IntroBadge = ({ icon: IconComponent, text }: Props) => {
  return (
    <div className="pretty-ring flex shrink-0 items-center gap-2 self-start rounded-full px-3 py-1.5 text-xs text-slate-400/75 md:text-sm">
      <IconComponent
        className="fill-slate-600/75 text-slate-400/75"
        size={18}
      />
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default IntroBadge;
