import {JSX} from "react";
import {useFavorites} from "../../hooks/useFavorites";
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const {favorites} = useFavorites();
  return (
    <header className={styles.header}>
      <span>Favorites: {favorites.length}</span>
    </header>
  );
}
export default Header;
