import {FC, JSX, useState} from "react";

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width: string,
  height: string,
  variant?: CardVariant,
  children?: React.ReactChild | React.ReactNode | JSX.Element | JSX.Element[] | string | string[];
  onCLick?: (n: number) => void,
}

const Card: FC<ICardProps> = ({width, height, variant, children, onCLick}): JSX.Element => {
  const [state, setState] = useState(0);
  return (
    <div style={{
      width,
      height,
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      backgroundColor: variant === CardVariant.primary ? 'whitesmoke' : 'transparent'
    }}
         onClick={() => {
           if (onCLick) onCLick(state);
           setState(state + 1)
         }}>
      {children}
    </div>
  );
}
export default Card;
