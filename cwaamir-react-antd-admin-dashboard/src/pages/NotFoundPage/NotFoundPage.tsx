import { JSX } from 'react';
import { Empty, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesPaths } from '../../routes';

const NotFoundPage = (): JSX.Element => {
  return (
    <Space direction="vertical" size={'large'} style={{display: 'flex', alignItems: 'center'}}>
      <Typography.Title>Oops... Not Found</Typography.Title>
      <Empty description={'No such page or information was removed'} />
      <Link to={RoutesPaths.INDEX}>Back to Main</Link>
    </Space>
  );
};
export default NotFoundPage;
