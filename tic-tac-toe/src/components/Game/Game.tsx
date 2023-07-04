import React, {FC, JSX} from "react";
import styles from './Game.module.css'

interface IGameProps {
  children: React.ReactNode | string;
}

const Game: FC<IGameProps> = ({children}): JSX.Element => {
  return (
    <div className={styles.game}>
      {children}
    </div>
  );
}
export default Game;
