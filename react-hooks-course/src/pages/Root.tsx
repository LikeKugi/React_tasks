import {JSX} from "react";
import NavBar from "../components/NavBar/NavBar";
import {Outlet} from "react-router-dom";

const Root = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>

    </>
  );
}
export default Root;
