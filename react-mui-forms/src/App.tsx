import React from 'react';
import './App.css';
import AppRouter from "./ui/AppRouter";
import DataProvider from "./providers/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <AppRouter/>
      </DataProvider>
    </div>
  );
}

export default App;
