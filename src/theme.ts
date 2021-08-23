import { createTheme } from '@material-ui/core/styles';

const themeConfig = (prefersDarkMode: boolean) => createTheme({
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: prefersDarkMode ? '#22465d' : '#0492C2',
    },
    secondary: {
      main: prefersDarkMode ? '#385d86' : '#648cb8',
    },
    background: {
      default: prefersDarkMode ? '#252130' : '#fff',
      paper: prefersDarkMode ? '#423c54' : '#f7f7f7',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1000,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  overrides: {
    // MuiButton: {
    //   root: {
    //     paddingLeft: '3rem',
    //     paddingRight: '3rem',
    //     textTransform: 'initial',
    //     borderRadius: 0,
    //   },
    // },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'none',
        },
      },
    },
  },
});

export default themeConfig;
