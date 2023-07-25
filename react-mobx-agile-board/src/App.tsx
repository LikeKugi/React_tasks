import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import useStore from "./hooks/useStore";

function App() {
  const {users}  = useStore();

  console.log(users);

  return (
    <div className="App">

    </div>
  );
}

export default observer(App);
