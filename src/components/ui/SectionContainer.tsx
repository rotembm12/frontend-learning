import { PropsWithChildren } from 'react';

export const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='mx-auto py-1 lg:py-3 rounded-md max-w-86'>{children}</div>
  );
};
