import { JSX } from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import RootPage from '@pages/RootPage';
import Clicker from '@components/Clicker';
import Todos from '@components/todos/Todos';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<RootPage/>}>
    <Route path={'/clicker'} element={<Clicker/>} />
    <Route path={'/todos'} element={<Todos/>} />
  </Route>
))

const AppRouter = (): JSX.Element => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
export default AppRouter;
