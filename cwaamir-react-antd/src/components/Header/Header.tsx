import { JSX } from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';

const Header = (): JSX.Element => {

  const navigate = useNavigate();

  const onMenuClick = (item: MenuInfo) => {
    navigate(item.key)
  }

  return (
    <header className={'Header'}>
      <Menu mode={'horizontal'} onClick={onMenuClick} items={[{
        label: <HomeOutlined />,
        key: '',
      },
        {
          label: 'Men',
          key: 'men',
          children: [
            {
              label: "Men's Shirts",
              key: "mens-shirts",
            },
            {
              label: "Men's Shoes",
              key: "mens-shoes",
            },
            {
              label: "Men's Watches",
              key: "mens-watches",
            },
          ],
        },
        {
          label: 'Women',
          key: 'Women',
          children: [
            {
              label: "Women's Dresses",
              key: "womens-dresses",
            },
            {
              label: "Women's Shoes",
              key: "womens-shoes",
            },
            {
              label: "Women's Watches",
              key: "womens-watches",
            },
            {
              label: "Women's Bags",
              key: "womens-bags",
            },
            {
              label: "Women's Jewellery",
              key: "womens-jewellery",
            },
          ]
        },
        {
          label: 'Fragrances',
          key: 'fragrances',
        },]} />
    </header>
  );
};
export default Header;
