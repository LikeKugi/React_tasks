import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../screens/home/Home.jsx";
import CarDetail from "../screens/car-detail/CarDetail.jsx";
const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<CarDetail />} path='/car/:id'/>
          <Route path='*' element={<div> 404 | Not Found </div>} />
        </Routes>
      </BrowserRouter>
  );
}
export default Router;
