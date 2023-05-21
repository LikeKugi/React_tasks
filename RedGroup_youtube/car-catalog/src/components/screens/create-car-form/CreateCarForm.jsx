import styles from './CreateCarForm.module.css'
import {useForm} from "react-hook-form";


// eslint-disable-next-line react/prop-types
const CreateCarForm = ({setCars}) => {
  // const [data, setData] = useState(clearData());

  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange'
  })

  const createCar = (data) => {
    if (!(data.name && data.price)) return;
    setCars(prev => [...prev, {id: prev.length + 1, ...data}]);
    reset();
  }

  return (<form className={styles.form}
                onSubmit={handleSubmit(createCar)}>
    <input {...register('name', {required: true})} placeholder='Name'/>
    <input {...register('price', {required: true})} placeholder='Price'/>
    <input {...register('image', {required: true})} placeholder='Image'/>

    <button className='btn'>Create
    </button>
  </form>);
}

export default CreateCarForm;