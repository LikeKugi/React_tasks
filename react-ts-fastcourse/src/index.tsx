import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalProvider from "./context/ModalContext";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
      <ModalProvider>
        <App/>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

