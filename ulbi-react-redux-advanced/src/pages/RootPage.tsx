import {JSX} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const RootPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
export default RootPage;
