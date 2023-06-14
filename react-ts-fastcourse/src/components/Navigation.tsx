import {JSX} from "react";
import {NavLink} from "react-router-dom";

const Navigation = (): JSX.Element => {
  return (
    <nav className={'h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'}>
      <NavLink className={'mb-2'} to={'/'}>Main</NavLink>
      <NavLink className={'mb-2'} to={'/about'}>About</NavLink>
    </nav>
  );
}
export default Navigation;
