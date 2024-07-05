import { PropsWithChildren } from 'react';

export const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='mx-auto p-1 lg:p-3 rounded-md max-w-86'>{children}</div>
  );
};
