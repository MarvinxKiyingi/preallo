import { common } from '../colors/common';
import { purple } from '../colors/purple';

export const createPalette = {
  background: {
    default: purple[100],
    secondary: purple[200],
  },
  primary: {
    main: purple[500],
    secondary: purple[400],
  },
  secondary: {
    main: purple[300],
  },
  error: {
    main: '#E75152',
    contrastText: common.white,
  },
};
