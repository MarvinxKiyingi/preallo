import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'children' | 'fullWidth' | 'href' | 'onClick' | 'disabled' | 'disableFocusRipple' | 'disableRipple'
>;

export interface IButtonProps extends ButtonBaseProps {
  onClick: () => void;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const StyledButton = styled(MuiButton)({
  borderRadius: '0.625rem',
});

export const Button = ({ children, fullHeight, ...props }: IButtonProps) => {
  const buttonInlineStyling = {
    height: fullHeight ? '100%' : null,
  };
  return (
    <StyledButton sx={buttonInlineStyling} {...props}>
      {children}
    </StyledButton>
  );
};
