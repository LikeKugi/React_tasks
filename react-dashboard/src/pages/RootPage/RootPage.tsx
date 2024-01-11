import { JSX } from 'react';
import styles from './RootPage.module.scss';
import { Outlet } from 'react-router-dom';
import TopBar from '@/components/Topbar/TopBar';
import SideBar from '@/components/SideBar/SideBar';

const RootPage = (): JSX.Element => {
  return (
    <div className={styles.RootPage}>
      <SideBar/>
      <div className={styles.RootPage__content}>
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  );
};
export default RootPage;
