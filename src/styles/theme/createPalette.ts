import { common } from '../colors/common';
import { grey } from '../colors/grey';
import { indigo } from '../colors/indigo';
import { red } from '../colors/red';
import { violet } from '../colors/violet';

export const createPalette = {
  background: {
    default: common.base,
    paper: common.white,
    accent: '#EEEBF9',
  },
  primary: {
    main: violet[500],
    dark: violet[900],
    light: violet[700],
    contrastText: common.white,
  },
  secondary: {
    main: indigo[500],
    dark: indigo[550],
    light: indigo[300],
    contrastText: common.white,
  },
  common: {
    ...common,
  },
  text: {
    primary: grey.light[600],
    secondary: grey.light[500],
    disabled: grey.light[100],
    hint: grey.light[100],
  },
  error: {
    main: red[500],
    light: red[400],
    dark: red[700],
  },
  accent: {
    background: '#EEEBF9',
  },
};
