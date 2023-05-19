import styles from "../home/Home.module.css";

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
      <button>Read more</button>
    </div>);


export default CarItem;