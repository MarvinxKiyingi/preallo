import { common } from './colors/common';
import { purple } from './colors/purple';

export const createPalette = {
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
};
