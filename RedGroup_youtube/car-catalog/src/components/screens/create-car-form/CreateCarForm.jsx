import styles from './CreateCarForm.module.css'
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import CarsService from "../../../services/cars.service.js";


// eslint-disable-next-line react/prop-types
const CreateCarForm = () => {

  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange'
  });

  const queryClient = useQueryClient();

  const {mutate} = useMutation(['create car'], (data) => CarsService.create(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('cars');
      reset();
    },
  });

  const createCar = (data) => {
    mutate(data);
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