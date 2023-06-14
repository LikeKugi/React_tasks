import React, {FC, JSX, useState} from "react";
import {IProduct} from "../types/IProduct";
import axios, {AxiosError} from "axios";
import Error from "./Error";

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {"rate": 0, "count": 0},
}

interface ICreateProduct {
  onCreate: (p: IProduct) => void,
}

const CreateProduct: FC<ICreateProduct> = ({onCreate}): JSX.Element => {

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (value.trim().length === 0) {
      setError('Please enter a valid title');
      return;
    }
    productData.title = value;

    try {
      const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
      onCreate(response.data);
    } catch (e: unknown) {
      const err = e as AxiosError;
      setError(err.message);
    }


  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setValue(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text"
             className={"border py-2 px-4 mb-2 w-full outline-0"}
             placeholder={'enter product title'}
             value={value}
             onChange={changeHandler}/>
      {!!error && <Error error={error}/>}
      <button type={'submit'}
              className={'py-2 px-4 border bg-yellow-400 hover:text-blue-500'}>Create
      </button>
    </form>
  );
}
export default CreateProduct;
