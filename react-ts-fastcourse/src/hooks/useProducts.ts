import {useEffect, useState} from "react";
import {IProduct} from "../types/IProduct";
import axios, {AxiosError} from "axios";

export interface IUseProducts {
  dataProducts: IProduct[],
  loading: boolean,
  error: string,
  addProduct: (p: IProduct) => void,
}

export default function useProducts(): IUseProducts {
  const [dataProducts, setDataProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  function addProduct (product: IProduct) {
    setDataProducts(prevState => [...prevState, product])
  }
  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setDataProducts(response.data);
      setError('');
    } catch (e: unknown) {
      const err = e as AxiosError;
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }
  return { dataProducts, loading, error, addProduct };
}

