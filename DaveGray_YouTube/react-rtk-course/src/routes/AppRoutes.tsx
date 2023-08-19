import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';
import LessonFirst from '../pages/LessonFirst';
import LessonSecond from '../pages/LessonSecond';
import LessonThird from '../pages/LessonThird';

const routerPath = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'}
         element={<RootPage/>}>
    <Route index
           element={<HomePage/>}/>
    <Route path={'/first'}
           element={<LessonFirst/>}/>
    <Route path={'/second'}
           element={<LessonSecond/>}/>
    <Route path={'/third'}
           element={<LessonThird/>}/>
  </Route>
));

const AppRoutes = (): JSX.Element => {
  return <RouterProvider router={routerPath}/>;
};

export default AppRoutes;
