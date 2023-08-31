import { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  url: string;
};

const SocialButton = ({ url, icon: Icon }: Props) => {
  return (
    <a href={url} target="_blank" className="hover:pretty-ring rounded-xl p-3 text-slate-400/75 transition-all hover:text-slate-200/75">
      <Icon />
    </a>
  );
};

export default SocialButton;
