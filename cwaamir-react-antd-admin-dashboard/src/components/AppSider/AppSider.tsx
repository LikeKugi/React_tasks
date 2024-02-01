import { JSX } from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import { RoutesPaths } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

const AppSider = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <Sider>
        <Menu onClick={(item) => navigate(item.key)}
              items={[
                {
                  label: 'Dashboard',
                  key: RoutesPaths.INDEX,
                  icon: <AppstoreOutlined />,
                },
                {
                  label: 'Inventory',
                  key: RoutesPaths.INVENTORY,
                  icon: <ShopOutlined />,
                },
                {
                  label: 'Orders',
                  key: RoutesPaths.ORDERS,
                  icon: <ShoppingCartOutlined />,
                },
                {
                  label: 'Customers',
                  key: RoutesPaths.CUSTOMERS,
                  icon: <UserOutlined />,
                }
              ]}>

        </Menu>
      </Sider>
    </>
  );
};
export default AppSider;
