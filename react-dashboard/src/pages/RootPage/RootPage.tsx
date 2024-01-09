import { JSX } from 'react';
import styles from './RootPage.module.scss'
import { Outlet } from 'react-router-dom';
import TopBar from '@/components/Topbar/TopBar';
import SideBar from '@/components/SideBar/SideBar';

const RootPage = (): JSX.Element => {
  return (
    <div className={styles.RootPage}>
      <TopBar />
      <div className={styles.RootPage__content}>
        <SideBar />
        <Outlet />
      </div>
      <footer>
        footer content
      </footer>
    </div>
  );
};
export default RootPage;
