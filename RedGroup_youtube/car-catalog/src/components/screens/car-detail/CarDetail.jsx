import {useParams, Link} from "react-router-dom";
import CarItem from "../car-item/CarItem.jsx";
import {withAuth} from "../../../HOC/withAuth.jsx";
import {useQuery} from "@tanstack/react-query";
import carsService from "../../../services/cars.service.js";

const CarDetail = () => {
  const {id} = useParams()

  const {data, isLoading} = useQuery(['cars'], () => carsService.getById(id))
  if (isLoading) return <p>Is loading...</p>

  const car = data[0];

  return (
      <div>
        <Link to='/' className='btn'>back {car.id}</Link>
        <CarItem car={car} />
      </div>);
}

export default withAuth(CarDetail);
