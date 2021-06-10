import React from 'react';
import '@fontsource/roboto'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Navbar from './components/Navbar/Navbar'


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar title="Debt Calculator"></Navbar>
    </ThemeProvider>
  );
}

export default App;
