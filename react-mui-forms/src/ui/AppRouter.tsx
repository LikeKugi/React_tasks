import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import RootPage from "../pages/RootPage";
import StepOne from "../components/StepOne/StepOne";
import StepTwo from "../components/StepTwo/StepTwo";
import StepThree from "../components/StepThree/StepThree";
import Result from "../components/Result/Result";

const routerPath = createBrowserRouter(createRoutesFromElements(
  <Route path={"/"}
         element={<RootPage/>}>
    <Route index
           element={<StepOne/>}/>
    <Route path={"/step-2"} element={<StepTwo />} />
    <Route path={"/step-3"} element={<StepThree />} />
    <Route path={"/result"} element={<Result />} />

  </Route>
))


const AppRouter = () => {
  return (
    <RouterProvider router={routerPath}/>
  );
};

export default AppRouter;
