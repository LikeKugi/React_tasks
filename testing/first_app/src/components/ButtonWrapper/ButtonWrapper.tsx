import React, { FC } from 'react';

interface IButtonWrapperProps {
  title: string;
}

const ButtonWrapper: FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IButtonWrapperProps> = ({title,...props}) => {
  return (
    <div>
      <button {...props}>{title}</button>
    </div>
  );
};

export default ButtonWrapper;
