import {FC, JSX} from "react";
import styles from './GameInfo.module.css';
import GameSymbol from "../GameSymbol/GameSymbol";


interface IGameInfoProps {
  isDraw: boolean;
  winnerSymbol: string;
  currentStep: string;
}

const GameInfo: FC<IGameInfoProps> = ({isDraw, winnerSymbol, currentStep}): JSX.Element => {

  if (isDraw) {
    return (
      <div className={styles["game-info"]}>
        Ничья
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    )
  }

  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  )
}
export default GameInfo;
