import React, {useState} from 'react';
import './App.css';
import Game from "./components/Game/Game";
import GameInfo from "./components/GameInfo/GameInfo";
import GameField from "./components/GameField/GameField";

function App() {
  const [move, setMove] = useState(true);
  const [progressing, setProgressing] = useState(true);
  return (
    <div className="App">
      <Game>
        <GameInfo currentMove={move} progressing={progressing} />
        <GameField />
      </Game>
      <div className="game">
        <div className="game__info">Move <span className={'symbol'}></span></div>
        <div className="game__field">
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
          <button className="cell"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
