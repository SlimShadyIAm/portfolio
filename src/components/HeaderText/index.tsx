import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HeaderText = ({ children }: Props) => {
  return (
    <h1 className="text-md mb-2 font-semibold uppercase tracking-widest text-slate-300/90">
      {children}
    </h1>
  );
};

export default HeaderText;
