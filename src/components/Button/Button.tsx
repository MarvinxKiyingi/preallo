import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'children' | 'fullWidth' | 'href' | 'onClick'>;

export interface IButtonProps extends ButtonBaseProps {
  onClick: () => void;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '0.625rem',
}));

export const Button = ({ children, ...props }: IButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
