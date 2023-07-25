import {FC, JSX} from "react";
import styles from './GameSymbol.module.css'

interface IGameSymbolProps {
  symbol: string
}

const GameSymbol: FC<IGameSymbolProps> = ({  symbol }): JSX.Element => {
  return (
    <span>{symbol}</span>
  );
}
export default GameSymbol;
