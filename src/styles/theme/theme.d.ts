import React from 'react';
import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  export interface PaletteColor {
    secondary?: string;
  }

  export interface TypeBackground {
    secondary?: string;
  }

  export interface TypographyVariants {
    textLargeBold?: React.CSSProperties;
    textLargeSemiBold?: React.CSSProperties;
    textLarge?: React.CSSProperties;
    textNormalBold?: React.CSSProperties;
    textNormalSemiBold?: React.CSSProperties;
    textNormal?: React.CSSProperties;
    textSmallBold?: React.CSSProperties;
    textSmallSemiBold?: React.CSSProperties;
    textSmall?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    textLargeBold?: React.CSSProperties;
    textLargeSemiBold?: React.CSSProperties;
    textLarge?: React.CSSProperties;
    textNormalBold?: React.CSSProperties;
    textNormalSemiBold?: React.CSSProperties;
    textNormal?: React.CSSProperties;
    textSmallBold?: React.CSSProperties;
    textSmallSemiBold?: React.CSSProperties;
    textSmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    textLargeBold?: true;
    textLargeSemiBold?: true;
    textLarge?: true;
    textNormalBold?: true;
    textNormalSemiBold?: true;
    textNormal?: true;
    textSmallBold?: true;
    textSmallSemiBold?: true;
    textSmall?: true;
  }
}
