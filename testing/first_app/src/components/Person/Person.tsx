import { FC, JSX } from 'react';

interface IPersonProps {
  name: string;
}

const Person: FC<IPersonProps> = ({name}): JSX.Element => {
  return (
    <div>
      Name: <span>{name}</span>
    </div>
  );
};
export default Person;
