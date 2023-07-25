import React, {useState} from 'react';
import './App.css';
import Game from "./components/Game/Game";
import GameInfo from "./components/GameInfo/GameInfo";
import GameField from "./components/GameField/GameField";
import {SYMBOL_X} from "./utils/SYMBOLs";
import GameCell from "./components/GameCell/GameCell";

const initialArray = ['', '', '', '', '', '', '', '', '']

function App() {
  const [cells, setCells] = useState<string[]>(initialArray);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState<number[]>([]);

  const handleClick = (i: number) => {
    console.log('click', i);
  }

  return (
    <div className="App">
      <Game>
        <GameInfo isDraw={true}
                  winnerSymbol=""
                  currentStep="x"/>
        <GameField/>
      </Game>
      <div className="game">
        <div className="game__info">Move <span className={'symbol'}></span></div>
        <div className="game__field">
          {cells.map((cell, idx) => (<GameCell symbol={''}
                                               onClick={() => handleClick(idx)}
                                               key={idx}
                                               isWinner={winnerSequence?.includes(idx)}/>))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
