import { IAddToCartResponse, IGetAllProductsResponse, IGetProductsByCategories } from '@/types/IProduct';

export const getAllProducts = async (): Promise<IGetAllProductsResponse> => {

  const result = await fetch('https://dummyjson.com/products');
  return await result.json();
};

export const addToCart = async (id: number): Promise<IAddToCartResponse> => {
  const result = await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ]
    })
  })
  return await result.json();
}

export const getProductsByCategories = async (category: string): Promise<IGetProductsByCategories> => {
  const result = await fetch(`https://dummyjson.com/products/category/${category}`)
  return await result.json();
}
