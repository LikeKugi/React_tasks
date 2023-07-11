import {JSX} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import TourPage from "../pages/TourPage";

const routerPath = createBrowserRouter(createRoutesFromElements(
  <Route path={"/"} element={<RootPage/>} >
    <Route index element={<HomePage />} />
    <Route path={"/:id"} element={<TourPage />} />
  </Route>
))

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <RouterProvider router={routerPath} />
    </>
  );
}
export default AppRoutes;
