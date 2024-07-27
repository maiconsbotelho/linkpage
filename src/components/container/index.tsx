import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-full max-w-screen-md px-7 sm:px-3">{children}</div>;
};

export default Container;
