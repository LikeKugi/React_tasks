import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import {Box, Container} from "@mui/material";
import Header from "./components/Header/Header";

function App() {


  return (
    <Container maxWidth={"xl"}>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default observer(App);
