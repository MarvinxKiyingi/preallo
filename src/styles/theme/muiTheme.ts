import { createTheme } from '@mui/material/styles';
import { createPalette } from './createPalette';
import { createTypography } from './createTypography';
import { createBreakpoints } from './createBreakpoints';

export const theme = createTheme({
  breakpoints: createBreakpoints,
  typography: createTypography,
  palette: createPalette,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // Disable ripple, on the whole application 💣!
      },
    },
    MuiDialog: {
      defaultProps: {
        sx: { backdropFilter: 'blur(5px)' },
      },
    },
  },
});
