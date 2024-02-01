import { JSX } from 'react';
import { Space, Typography } from 'antd';
import { CalculatorOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import DashboardCard from '../../components/DashboardCard/DashboardCard';

const DashboardPage = (): JSX.Element => {
  return (
    <>
      <Typography.Title level={2}>
        Dashboard
      </Typography.Title>
      <Space direction="horizontal" size={'large'}>
        <DashboardCard title="Orders" value={1234} icon={<ShoppingCartOutlined style={{fontSize: '2rem', color: '#52c41a'}} />} />
        <DashboardCard title="Inventory" value={1234} icon={<ShopOutlined style={{fontSize: '2rem', color: '#52c41a'}} />} />
        <DashboardCard title="Clients" value={1234} icon={<UserOutlined style={{fontSize: '2rem', color: '#52c41a'}} />} />
        <DashboardCard title="Revenue" value={1234} icon={<CalculatorOutlined style={{fontSize: '2rem', color: '#52c41a'}} />} />

      </Space>
    </>
  );
};
export default DashboardPage;
