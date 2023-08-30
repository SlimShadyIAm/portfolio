import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
};

const SocialButton = ({ icon }: Props) => {
  return (
    <button className="hover:pretty-ring rounded-xl p-3 text-zinc-400/75 transition-all hover:text-zinc-200/75">
      {icon}
    </button>
  );
};

export default SocialButton;
