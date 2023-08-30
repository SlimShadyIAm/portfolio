import { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
};

const SocialButton = ({ icon: Icon }: Props) => {
  return (
    <button className="hover:pretty-ring rounded-xl p-3 text-slate-400/75 transition-all hover:text-slate-200/75">
      <Icon />
    </button>
  );
};

export default SocialButton;
