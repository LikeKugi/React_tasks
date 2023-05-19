import styles from './Home.module.css'
// import car1 from '/1.jpg' // from public folder
import {cars} from "./cars.data.js";
import CarItem from "../car-item/CarItem.jsx";

const Home = () => {
  return (
      <div>
        <h1>Cars catalog</h1>
        <div>
          {cars.length ? cars.map(car =>
              <CarItem key={car.id} car={car} />
          ) : 'No cars'}

        </div>
      </div>
  )
}

export default Home;