import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-screen-md px-3">{children}</div>;
};

export default Container;