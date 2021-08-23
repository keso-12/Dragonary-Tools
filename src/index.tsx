import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from 'components/Routes';
import themeConfig from './theme';

const RenderedApp = () => (
  <MuiThemeProvider theme={themeConfig(false)}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <RenderedApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
