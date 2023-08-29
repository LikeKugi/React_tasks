import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PostsNav.module.scss';

const PostsNav = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to={'add'}>Add Post</NavLink>
      <NavLink className={styles.nav__link} to={'posts'}>Posts</NavLink>
      <NavLink className={styles.nav__link} to={'users'}>Users</NavLink>
    </nav>
  );
};
export default PostsNav;
