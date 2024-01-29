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
              key: "men-shirts",
            },
            {
              label: "Men's Shoes",
              key: "men-shoes",
            },
            {
              label: "Men's Watches",
              key: "men-watches",
            },
          ],
        },
        {
          label: 'Women',
          key: 'Women',
          children: [
            {
              label: "Women's Dresses",
              key: "women-dresses",
            },
            {
              label: "Women's Shoes",
              key: "women-shoes",
            },
            {
              label: "Women's Watches",
              key: "women-watches",
            },
            {
              label: "Women's Bags",
              key: "women-bags",
            },
            {
              label: "Women's Jewellery",
              key: "women-jewellery",
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
