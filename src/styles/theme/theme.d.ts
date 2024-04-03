import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  export interface PaletteColor {
    accent: string;
  }

  export interface TypeBackground {
    accent: string;
  }
}
