import { JSX } from 'react';
import { Header } from 'antd/es/layout/layout';
import { BellFilled, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Badge, Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesPaths } from '../../routes';

const AppHeader = (): JSX.Element => {
  return (
    <>
      <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fefefe'}}>
          <Link to={RoutesPaths.INDEX}><HomeOutlined style={{ fontSize: '1.5rem', }}/></Link>
          <Typography.Title type="success">Dashboard</Typography.Title>
          <Space style={{fontSize: '1.5rem'}}>
            <Button type="primary" icon={<Badge count={5} dot><MailOutlined /></Badge>} />
            <Button type="primary" icon={<Badge count={5}><BellFilled /></Badge>} />
          </Space>
      </Header>
    </>
  );
};
export default AppHeader;
