import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootPage from '../pages/RootPage/RootPage';
import { RoutesPaths } from './routes.constants';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import InventoryPage from '../pages/InventoryPage/InventoryPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import CustomersPage from '../pages/CustomersPage/CustomersPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesPaths.INDEX}
         element={<RootPage/>}>

    <Route index
           element={<DashboardPage/>}/>
    <Route path={RoutesPaths.INVENTORY}
           element={<InventoryPage/>}/>
    <Route path={RoutesPaths.ORDERS}
           element={<OrdersPage/>}/>
    <Route path={RoutesPaths.CUSTOMERS}
           element={<CustomersPage/>}/>

    <Route path={RoutesPaths.NOT_FOUND}
           element={<NotFoundPage/>}/>
  </Route>
));

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={routes}/>;
};

