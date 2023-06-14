import React, {JSX, useContext, useState} from "react";
import {ModalContext} from "../context/ModalContext";
import useProducts from "../hooks/useProducts";
import {IProduct} from "../types/IProduct";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Product from "../components/Product";

const ProductsPage = (): JSX.Element => {

  const [count, setCount] = useState(0);
  const {modal, open, close} = useContext(ModalContext);

  const {dataProducts, loading, error, addProduct} = useProducts();

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold underline">React project</h1>
      <button className={'py-2 px-4 border'}
              onClick={() => setCount(count + 1)}>Clicked {count} times
      </button>
      <button className={'py-2 px-4 border'}
              onClick={open}>Create new product
      </button>
      {modal && <Modal title="Create new product"
                       closeModal={close}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      {loading && <Loader loading={loading}/>}
      {!!error && <Error error={error}/>}
      {dataProducts.map(product => <Product product={product}
                                            key={product.id}/>)}
    </div>
  );
}
export default ProductsPage;
