import { createTheme } from '@mui/material/styles';
import { common } from './colors/common';
import { purple } from './colors/purple';
import { typography } from './typography';

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
      main: '#E75152',
      contrastText: common.white,
    },
  },
  typography: typography,
});
