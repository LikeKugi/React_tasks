import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import CarsService from "../../../services/cars.service.js";
import CarItem from "../car-item/CarItem.jsx";
import {withAuth} from "../../../HOC/withAuth.jsx";

const CarDetail = () => {
  const {id} = useParams()

  const [car, setCar] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
  });

  useEffect( () => {
    if (!id) return;
    const fetchData = async () => {
      const response = await CarsService.getById(id);
      setCar(response.data[0]);
    }
    fetchData();

  }, [id]);

  return (
      <div>
        <Link to='/' className='btn'>back {car.id}</Link>
        <CarItem car={car} />
      </div>);
}

export default withAuth(CarDetail);
