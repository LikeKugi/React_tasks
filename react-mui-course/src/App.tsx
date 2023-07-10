import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Feedbar from "./components/Feedbar";
import Rightbar from "./components/Rightbar";
import {Box, Stack} from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Sidebar/>
        <Feedbar/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
