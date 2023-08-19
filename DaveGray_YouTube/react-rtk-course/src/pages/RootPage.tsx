import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const RootPage = (): JSX.Element => {
  return (
    <div>
      <Header/>
      <div className="app">
        <Outlet/>
      </div>
    </div>
  );
};
export default RootPage;
