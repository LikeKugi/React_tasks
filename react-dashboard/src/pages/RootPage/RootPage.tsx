import { JSX } from 'react';
import styles from './RootPage.module.scss'
import { Outlet } from 'react-router-dom';

const RootPage = (): JSX.Element => {
  return (
    <div className={styles.RootPage}>
      <header>
        header content
      </header>
      <div className={styles.RootPage__content}>
        <Outlet />
      </div>
      <footer>
        footer content
      </footer>
    </div>
  );
};
export default RootPage;
