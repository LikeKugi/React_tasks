import { IGetAllProductsResponse } from '@/types/IProduct';

export const getAllProducts = async (): Promise<IGetAllProductsResponse> => {

  const result = await fetch('https://dummyjson.com/products');
  return await result.json();
};
