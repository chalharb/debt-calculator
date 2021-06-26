import React from 'react';
import { ThemeProps } from './model';
import { ThemeProvider, createMuiTheme, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as SCThemeProvider } from "styled-components";
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import '@fontsource/roboto';

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        primary: {
          main: '#3B8EA5',
        },
        secondary: {
          main: '#F46036',
        },
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </SCThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;