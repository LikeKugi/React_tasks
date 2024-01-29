import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootPage from '@/pages/RootPage/RootPage';
import HomePage from '@/pages/HomePage/HomePage';
import CategoryPage from '@/pages/CategoryPage/CategoryPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'}
         element={<RootPage/>}>
    <Route index
           element={<HomePage/>}/>
    <Route path={'/:slug'}
           element={<CategoryPage/>}/>
  </Route>
));

const AppRouter = (): JSX.Element => {
  return <RouterProvider router={routes}/>;
};
export default AppRouter;
