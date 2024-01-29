import { JSX } from 'react';
import Header from '@/components/Header/Header';
import PageContent from '@/components/PageContent/PageContent';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer/Footer';

const RootPage = (): JSX.Element => {
  return (
    <div className={'RootPage'}>
      <Header />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </div>
  );
};
export default RootPage;
