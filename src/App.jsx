/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useMemo } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AppHeader } from "./components/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppDrawer } from "./components/Drawer";
import { AppContent } from "./components/Content";
import Container from '@mui/material/Container';
import { useCallback } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SnackbarProvider } from 'notistack';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });


function App() {
  const [mode, setMode] = useState('light');

  const [drawer, setDrawer] = useState({
    left: false,
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleDrawer = useCallback((anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer({ ...drawer, [anchor]: open });
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <AppHeader toggleDrawer={toggleDrawer} />
            <AppDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
            <Container maxWidth="lg">
              <AppContent />
            </Container>
          </LocalizationProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
