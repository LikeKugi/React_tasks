import {JSX} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootPage from "../pages/RootPage/RootPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomePage from "../pages/HomePage/HomePage";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import User from "../pages/User/User";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";
import Logout from "../pages/Logout/Logout";

const routerPath = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootPage />}>
    <Route index element={<HomePage />} />
    <Route path={'/login'} element={<Login />} />
    <Route path={'/logout'} element={<Logout />} />
    <Route path={'/register'} element={<Register />} />
    <Route element={<RequireAuth />}>
      <Route path={'user'} element={<User />} />
      <Route path={'catalog'} element={<Catalog />} />
      <Route path={'product'} element={<Product />} />
    </Route>
  </Route>
))

const AppRoutes = (): JSX.Element => {
  return (
    <RouterProvider router={routerPath}/>
  );
};
export default AppRoutes;
