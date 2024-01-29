import { JSX, useEffect, useState } from 'react';
import { getAllProducts } from '@/api';
import { IProduct } from '@/types/IProduct';
import { Badge, Button, Card, Image, List, Rate, Typography } from 'antd';

const Products = (): JSX.Element => {
  const [items, setItems] = useState<IProduct[]>([]);

  useEffect(() => {
    getAllProducts().then(result => {
      setItems(result.products);
    });
  }, []);

  return (
    <div>
      <List grid={{ column: 4 }}
            dataSource={items}
            renderItem={(product, index) => {
              return <Badge.Ribbon text={product.discountPercentage}
                                   color="cyan"><Card className="itemCard" title={product.title}
                                                      key={index}
                                                      cover={<Image className={'itemCardImage'}
                                                                    src={product.thumbnail}/>}
              actions={[
                <Rate disabled allowHalf value={product.rating}/>,
                <Button type="link">Add To Cart</Button>
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
