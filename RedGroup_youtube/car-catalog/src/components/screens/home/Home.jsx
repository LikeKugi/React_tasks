// import car1 from '/1.jpg' // from public folder
// import {cars as carsData} from "../../../services/cars.data.js";
import CarsService from "../../../services/cars.service.js";
import CarItem from "../car-item/CarItem.jsx";
import CreateCarForm from "../create-car-form/CreateCarForm.jsx";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const Home = () => {
  useEffect( () => {
    const fetchData = async () => {
      const response = await CarsService.getAll();
      setCars(response.data);
    }
    fetchData();
  }, []);

  const [cars, setCars] = useState([]);
  const {user, setUser} = useContext(AuthContext);

  useEffect(() => {
    console.log('changed cars array');
  }, [cars])

  const nav = useNavigate();

  return (
      <div>
        <h1>Cars catalog</h1>
        {user ?
            <>
              <h2>Welcome, {user.name}</h2>
              <button onClick={() => setUser(null)}>Logout</button>
            </>  :
            <button onClick={() => setUser({name: 'Default'})}>Login</button>
        }
        <CreateCarForm setCars={setCars}/>
        <div>
          {cars.length ? cars.map(car =>
              <CarItem key={car.id} car={car}/>
          ) : 'No cars'}

        </div>
      </div>
  )
}

export default Home;

// import {useMemo} from "react";

// const Home = () => {
//   const [cars, setCars] = useState(carsData);
//   const filteredCars = useMemo( () => cars.filter((car) => car.price > 22500))
//
//   return (
//       <div>
//         <h1>Cars catalog</h1>
//         <CreateCarForm setCars={setCars}/>
//         <div>
//           {filteredCars.length ? filteredCars.map(car =>
//               <CarItem key={car.id} car={car} />
//           ) : 'No cars'}
//
//         </div>
//       </div>
//   )
// }