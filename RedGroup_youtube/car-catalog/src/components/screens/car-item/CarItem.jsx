import styles from "../home/Home.module.css";
import {Link} from "react-router-dom";

const CarItem = ({car}) => (
    <div key={car.id}
         className={styles.item}>
      <div className={styles.img__wrapper}>
        <img src={car.image}
             alt={car.name}/>
      </div>
      <h2>{car.name.toUpperCase()}</h2>
      <p>{new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'USD',
      }).format(car.price)}</p>
      <Link className='btn' to={`/car/${car.id}`}>Read more</Link>
    </div>);


export default CarItem;