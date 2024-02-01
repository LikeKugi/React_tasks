import { JSX } from 'react';
import { Footer } from 'antd/es/layout/layout';
import { Flex, Typography } from 'antd';

const AppFooter = (): JSX.Element => {
  return (
    <>
      <Footer>
        <Flex gap={'large'}>
          <Typography.Paragraph>
            Some data
          </Typography.Paragraph>
          <Typography.Paragraph>
            Some extra data
          </Typography.Paragraph>
        </Flex>
      </Footer>
    </>
  );
};
export default AppFooter;
