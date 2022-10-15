import { createTheme } from '@mui/material/styles';
import { purple } from './colors/purple';

export const theme = createTheme({
  palette: {
    background: {
      default: purple[100],
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[300],
    },
    error: {
      main: '#ff6961',
    },
  },
  typography: {
    fontFamily: 'Archivo',
    h1: {
      fontWeight: 700,
      fontSize: '3.052rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.441rem',
    },
    h3: {
      fontSize: '1.953rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.563rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
});
