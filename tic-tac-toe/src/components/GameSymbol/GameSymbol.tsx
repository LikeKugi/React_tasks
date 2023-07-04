import {FC, JSX} from "react";
import styles from './GameSymbol.module.css'

interface IGameSymbolProps {
  isWinner?: boolean;
  onClick?: () => void;
  symbol: string;
}

const GameSymbol: FC<IGameSymbolProps> = ({ isWinner, onClick, symbol }): JSX.Element => {
  return (
    <button
      className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
export default GameSymbol;
