import React, {useState} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Feedbar from "./components/Feedbar";
import Rightbar from "./components/Rightbar";
import {Box, createTheme, PaletteMode, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {

  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction={"row"}
             spacing={2}
             justifyContent={"space-between"}>
        <Sidebar mode={mode} setMode={setMode} />
        <Feedbar/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
