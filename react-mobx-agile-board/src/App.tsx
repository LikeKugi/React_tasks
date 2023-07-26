import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import useStore from "./hooks/useStore";
import Dashboard from "./components/Dashboard/Dashboard";
import {Container} from "@mui/material";

function App() {
  const {users, boards}  = useStore();

  console.log('active Boards >>> ', toJS(boards.active?.sections[0]));

  return (
    <Container maxWidth={"lg"}>
      Start
      <Dashboard />
    </Container>
  );
}

export default observer(App);
