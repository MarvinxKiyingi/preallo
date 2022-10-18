import { createTheme } from '@mui/material/styles';
import { common } from './colors/common';
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
      contrastText: common.white,
    },
  },
  typography: {
    fontFamily: "'Hind Vadodara', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3.052rem',
      fontFamily: 'Chivo',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.441rem',
      fontFamily: 'Chivo',
    },
    h3: {
      fontSize: '1.953rem',
      fontWeight: 700,
      fontFamily: 'Chivo',
    },
    h4: {
      fontSize: '1.563rem',
      fontWeight: 700,
      fontFamily: 'Chivo',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      fontFamily: 'Chivo',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: 'Chivo',
    },
    allVariants: {
      letterSpacing: '0.090rem',
    },
  },
});
