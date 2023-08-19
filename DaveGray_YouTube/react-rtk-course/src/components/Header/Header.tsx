import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink className={styles.header__link} to={'/'}>Home</NavLink>
        <NavLink className={styles.header__link} to={'first'}>Counter</NavLink>
        <NavLink className={styles.header__link} to={'second'}>Posts</NavLink>
        <NavLink className={styles.header__link} to={'third'}>ApiPosts</NavLink>
      </nav>
    </header>
  );
};

export default Header;
