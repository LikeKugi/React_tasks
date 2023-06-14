import {FC, JSX, useState} from "react";
import {IProduct} from "../types/IProduct";

interface IProductProps {
  product: IProduct,
}

const Product: FC<IProductProps> = ({product}): JSX.Element => {
  const [description, setDescription] = useState(false);
  const btnColorClass = description ? 'bg-yellow-400' : 'bg-blue-400';
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <h2 className={"mb-1"}>{product.title}</h2>
      <div className="flex justify-evenly">
        <img className="w-1/6"
             src={product.image}
             alt={product.title}/>
        <div className="w-4/6">
          <p className={"mb-1"}>{product.category}</p>
          {product.rating?.rate && <p className="mb-1">Rating: <span className="font-bold">{product.rating.rate}</span></p>}
          <p className={"font-bold"}>${product.price}</p>
        </div>
      </div>
      <button className={"py-2 px-4 border " + btnColorClass}
              onClick={() => setDescription(prevState => !prevState)}>{description ? 'Hide description' : 'Show description'}
      </button>
      {description && <p className={"mb-1"}>{product.description}</p>}
    </div>
  );
}
export default Product;
