import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesConstants } from '@/routes/Routes.constants';
import RootPage from '@/pages/RootPage/RootPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import TeamPage from '@/pages/TeamPage/TeamPage';
import ContactsPage from '@/pages/ContactsPage/ContactsPage';
import InvoicesPage from '@/pages/InvoicesPage/InvoicesPage';
import FormPage from '@/pages/FormPage/FormPage';
import CalendarPage from '@/pages/CalendarPage/CalendarPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesConstants.INDEX} element={<RootPage />}>
    <Route path={RoutesConstants.TEAM} element={<TeamPage />} />
    <Route path={RoutesConstants.CONTACTS} element={<ContactsPage />}/>
    <Route path={RoutesConstants.INVOICES} element={<InvoicesPage />}/>
    <Route path={RoutesConstants.FORM} element={<FormPage />} />
    <Route path={RoutesConstants.CALENDAR} element={<CalendarPage />} />

    <Route path={RoutesConstants.NOT_FOUND} element={<NotFoundPage />} />
  </Route>
))

export const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};
