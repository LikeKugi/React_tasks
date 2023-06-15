import {JSX} from "react";
import {NavLink} from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to={'/'}>Main page</NavLink>
      <NavLink className={styles.nav__link} to={'/state'}>useState</NavLink>
      <NavLink className={styles.nav__link} to={'/effect'}>useEffect</NavLink>
      <NavLink className={styles.nav__link} to={'/ref'}>useRef</NavLink>
      <NavLink className={styles.nav__link} to={'/memo'}>useMemo</NavLink>
      <NavLink className={styles.nav__link} to={'/callback'}>useCallback</NavLink>
      <NavLink className={styles.nav__link} to={'/context'}>useContext</NavLink>
    </nav>
  );
}
export default NavBar;
