import { createTheme } from '@mui/material/styles';
import { createPalette } from './createPalette';
import { createTypography } from './createTypography';

export const theme = createTheme({
  typography: createTypography,
  palette: createPalette,
});
