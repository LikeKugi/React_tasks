import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to={'/clicker'}>Clicker</NavLink>
      <NavLink to={'/todos'}>Todos</NavLink>
    </nav>
  );
};

export default NavBar;
