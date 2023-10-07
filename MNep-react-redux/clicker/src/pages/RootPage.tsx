import { JSX } from 'react';
import NavBar from '@components/NavBar';
import {Outlet} from 'react-router-dom';

const RootPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet/>
      </div>
    </>
  );
};
export default RootPage;
