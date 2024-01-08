import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesConstants } from '@/routes/Routes.constants';
import RootPage from '@/pages/RootPage/RootPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesConstants.INDEX} element={<RootPage />}>

  </Route>
))

const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};
export default AppRouter;
