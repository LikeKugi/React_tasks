import { JSX, useEffect, useState } from 'react';
import { addToCart, getAllProducts, getProductsByCategories } from '@/api';
import { IProduct } from '@/types/IProduct';
import { Badge, Button, Card, Image, List, message, Rate, Typography } from 'antd';
import { useParams } from 'react-router-dom';

const Products = (): JSX.Element => {
  const params = useParams();

  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    if (params.slug) {
      getProductsByCategories(params.slug).then(result => {
        setItems(result.products);
      })
    } else {
      getAllProducts().then(result => {
        setItems(result.products);
      });
    }
  }, [params.slug]);

  const addProductToCart = (product: IProduct) => {
    addToCart(product.id).then(() => message.success(`${product.title} has been added to cart`));
  }

  return (
    <div>
      <List grid={{ column: 3 }}
            dataSource={items}
            renderItem={(product, index) => {
              return <Badge.Ribbon text={product.discountPercentage}
                                   color="cyan"><Card className="itemCard" title={product.title}
                                                      key={index}
                                                      cover={<Image className={'itemCardImage'}
                                                                    src={product.thumbnail}/>}
              actions={[
                <Rate disabled allowHalf value={product.rating}/>,
                <Button type="link" onClick={() => addProductToCart(product)}>Add To Cart</Button>
              ]}>
                <Card.Meta title={<>
                  <Typography.Paragraph>Price: ${product.price}</Typography.Paragraph>
                  <Typography.Paragraph delete
                                        type="danger">Sale:
                    ${(product.price * (100 + product.discountPercentage) / 100).toFixed(2)}</Typography.Paragraph>
                </>}
                           description={<Typography.Paragraph ellipsis={{
                             rows: 2,
                             expandable: true,
                             symbol: 'More...'
                           }}>{product.description}</Typography.Paragraph>}></Card.Meta>
              </Card></Badge.Ribbon>;
            }}></List>
    </div>
  );
};
export default Products;
