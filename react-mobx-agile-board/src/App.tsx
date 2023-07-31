import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import {Container} from "@mui/material";
import Header from "./components/Header/Header";
import NewTask from "./components/Dashboard/NewTask";

function App() {


  return (
    <Container maxWidth={"xl"}>
      <Header />
      <NewTask open={true} handleClose={() => {}}></NewTask>
      <Dashboard />
    </Container>
  );
}

export default observer(App);
