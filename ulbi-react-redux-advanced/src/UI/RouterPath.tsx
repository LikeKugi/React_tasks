import {JSX} from "react";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import RootPage from "../pages/RootPage";
import IndexPage from "../pages/IndexPage";
import BaseExample from "../pages/BaseExample";
import UsersActions from "../pages/UsersActions";
import PostsActions from "../pages/PostsActions";

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootPage />}>
    <Route index element={<IndexPage />} />
    <Route path={'/base'} element={<BaseExample/>}/>
    <Route path={'/actions'} element={<UsersActions/>}/>
    <Route path={'/posts'} element={<PostsActions/>}/>
  </Route>
))

const RouterPath = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
}
export default RouterPath;
