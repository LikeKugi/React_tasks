import { JSX } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppFooter from '../../components/AppFooter/AppFooter';
import AppSider from '../../components/AppSider/AppSider';

const RootPage = (): JSX.Element => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader/>
      <Layout hasSider>
        <AppSider/>
        <Content style={{ backgroundColor: '#e0e0e0', padding: '1rem', display: 'flex', flexDirection: 'column' }}>

          <div style={{ backgroundColor: '#fefefe', borderRadius: '1rem', flexGrow: 1, padding: '1rem' }}>
            <Outlet/>
          </div>

        </Content>
      </Layout>
      <AppFooter/>
    </Layout>
  );
};
export default RootPage;
