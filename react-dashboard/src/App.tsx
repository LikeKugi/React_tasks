import { AppRouter } from '@/routes';
import { ColorModeContext, useThemeMode } from '@/context/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {

  const [theme, colorMode] = useThemeMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode} >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
