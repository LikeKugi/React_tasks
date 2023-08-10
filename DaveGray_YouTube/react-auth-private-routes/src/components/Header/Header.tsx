import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const {auth} = useAuth();
  const permission = auth.accessToken && auth.accessToken.length > 0;
  return (
    <header className={styles.header}>
      <nav>
        <NavLink className={styles.header__link}
                 to={'/'}>Web Coast Customs</NavLink>

        <NavLink className={styles.header__link}
                 to={'/user'}>User</NavLink>
        <NavLink className={styles.header__link}
                 to={'/catalog'}>Catalog</NavLink>
        <NavLink className={styles.header__link}
                 to={'/product'}>Product</NavLink>
      </nav>

      <div>
        {permission ? <NavLink className={styles.header__link}
                               to={'/logout'}>Logout</NavLink> : (
          <>
            <NavLink className={styles.header__link}
                     to={'/login'}>Login</NavLink>
            <NavLink className={styles.header__link}
                     to={'/register'}>Register</NavLink>
          </>
        )}
      </div>

    </header>
  );
};

export default Header;
