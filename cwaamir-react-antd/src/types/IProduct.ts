export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IGetAllProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IAddToCartResponse {
  id: number
  products: IProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface IGetProductsByCategories {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
