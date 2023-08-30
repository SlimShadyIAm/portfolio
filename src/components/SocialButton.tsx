import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
};

const SocialButton = ({ icon }: Props) => {
  return (
    <button className="rounded-xl p-3 text-zinc-400/75 transition-all hover:bg-zinc-200/5 hover:shadow-zinc-800/5 hover:ring-2 hover:ring-white/10 hover:backdrop-blur">
      {icon}
    </button>
  );
};

export default SocialButton;
