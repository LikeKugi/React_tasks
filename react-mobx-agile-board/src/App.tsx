import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import {Container} from "@mui/material";

function App() {


  return (
    <Container maxWidth={"xl"}>
      Start
      <Dashboard />
    </Container>
  );
}

export default observer(App);
