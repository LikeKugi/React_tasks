import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import StateExample from "../pages/StateExample";
import Root from "../pages/Root";
import EffectExample from "../pages/EffectExample";
import RefExample from "../pages/RefExample";
import MemoExample from "../pages/MemoExample";
import CallbackExample from "../pages/CallbackExample";
import ContextExample from "../pages/ContextExample";


const routerPath = createBrowserRouter(createRoutesFromElements(
  (<Route path={'/'} element={<Root/>}>
    <Route index element={<IndexPage/>} />
    <Route path={'/state'} element={<StateExample />}/>
    <Route path={'/effect'} element={<EffectExample />} />
    <Route path={'/ref'} element={<RefExample />} />
    <Route path={'/memo'} element={<MemoExample />} />
    <Route path={'/callback'} element={<CallbackExample />} />
    <Route path={'/context'} element={<ContextExample />} />
  </Route>)
));


const Routers = () => {
  return (
    <RouterProvider router={routerPath} />
  );
}
export default Routers;
