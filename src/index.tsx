import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'globalStore';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import useDarkMode from 'utils/darkMode';
import App from 'components/Routes';
import themeConfig from './theme';

const RenderedApp = () => {
  const { prefersDarkMode, toggleTheme } = useDarkMode();

  return (
    <MuiThemeProvider theme={themeConfig(prefersDarkMode)}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Provider>
          <App toggleTheme={toggleTheme} />
        </Provider>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RenderedApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
