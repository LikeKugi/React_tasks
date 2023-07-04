import {FC, JSX} from "react";
import styles from './GameCell.module.css';
import GameSymbol from "../GameSymbol/GameSymbol";

interface IGameCellProps {
  isWinner: boolean;
  onClick: () => void;
  symbol: string;
}

const GameCell: FC<IGameCellProps> = ({isWinner,symbol,onClick}): JSX.Element => {
  return (
    <button
      className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
export default GameCell;
