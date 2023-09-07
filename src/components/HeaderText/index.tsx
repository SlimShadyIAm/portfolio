import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HeaderText = ({ children }: Props) => {
  return <h1 className="text-md font-semibold tracking-widest text-slate-300/90 uppercase mb-2">{children}</h1>;
};

export default HeaderText;
