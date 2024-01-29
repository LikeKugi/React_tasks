import { FC, JSX, PropsWithChildren } from 'react';

const PageContent: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <main className={'PageContent'}>
      {children}
    </main>
  );
};
export default PageContent;
