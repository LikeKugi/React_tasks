import React, {useEffect, useState} from 'react';
import './App.css';
import Roster from "./components/Roster";
import MoneyForm from "./components/MoneyForm";
import {TeamStoreProvider} from "./store/TeamStore";
import Athlete from "./store/Athlete";
import TeamNameInfo from "./components/TeamNameInfo";

const lebronJames = new Athlete('Lebron James', 37, 150);
const stephCurry = new Athlete('Steph Curry', 34, 150);

const getPlayersFromBack = (): Athlete[] => {
  return [lebronJames, stephCurry];
}

function App() {


  return (
    <div className="App">
      <TeamStoreProvider players={getPlayersFromBack()}>
        <TeamNameInfo/>
        <Roster/>
        <MoneyForm/>
      </TeamStoreProvider>
    </div>
  );
}

export default App;
