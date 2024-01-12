import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesConstants } from '@/routes/Routes.constants';
import RootPage from '@/pages/RootPage/RootPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesConstants.INDEX} element={<RootPage />}>
    <Route path={RoutesConstants.NOT_FOUND} element={<NotFoundPage />} />
  </Route>
))

const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};
export default AppRouter;
