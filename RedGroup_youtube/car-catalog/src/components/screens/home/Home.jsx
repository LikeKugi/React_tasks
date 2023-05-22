import CarItem from "../car-item/CarItem.jsx";
import CreateCarForm from "../create-car-form/CreateCarForm.jsx";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useQuery} from "@tanstack/react-query";
import carsService from "../../../services/cars.service.js";

const Home = () => {
  const {data, isLoading} = useQuery(['cars'], () => carsService.getAll())

  const [cars, setCars] = useState([]);
  const {user, setUser} = useContext(AuthContext);

  useEffect(() => {
    console.log('changed cars array');
  }, [cars])

  if (isLoading) return <p>Is loading...</p>

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
          {data.length ? data.map(car =>
              <CarItem key={car.id} car={car}/>
          ) : 'No cars'}

        </div>
      </div>
  )
}

export default Home;