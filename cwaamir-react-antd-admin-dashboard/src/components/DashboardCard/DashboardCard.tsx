import { FC, JSX, ReactNode } from 'react';
import { Card, Space, Statistic } from 'antd';

interface IDashboardCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

const DashboardCard: FC<IDashboardCardProps> = ({ title, value, icon }): JSX.Element => {

  return (
    <>
      <Card>
        <Space direction="horizontal"
               size={'large'}>
          {icon}
          <Statistic title={title}
                     value={value}/>
        </Space>
      </Card>
    </>
  );
};
export default DashboardCard;
