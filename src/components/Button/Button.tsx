import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'children' | 'fullWidth'>;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
