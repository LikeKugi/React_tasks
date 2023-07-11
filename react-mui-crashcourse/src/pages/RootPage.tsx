import React, {JSX} from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";

const RootPage = (): JSX.Element => {
  return (
    <>
      <SearchAppBar/>
      <Outlet />
    </>
  );
}
export default RootPage;
