import {JSX} from "react";
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to={'/'}>Main page</NavLink>
      <NavLink className={styles.nav__link} to={'/base'}>Base example</NavLink>
      <NavLink className={styles.nav__link} to={'/actions'}>Users actions</NavLink>
      <NavLink className={styles.nav__link} to={'/posts'}>Posts actions</NavLink>
    </nav>
  );
}
export default NavBar;
