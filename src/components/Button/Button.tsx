import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'children' | 'fullWidth' | 'href' | 'onClick' | 'disabled' | 'disableFocusRipple' | 'disableRipple'
>;

export interface IButtonProps extends ButtonBaseProps {
  onClick?: () => void;
  children: React.ReactNode;
  fullHeight?: boolean;
  component: 'button' | 'monthPicker';
}

const StyledButton = styled(MuiButton)({
  borderRadius: '0.625rem',
});

const StyledMonthPicker = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4, 15),
  fontSize: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(9, 13),
    fontSize: theme.spacing(2.25),
  },
}));

export const Button = ({ children, fullHeight, component, ...props }: IButtonProps) => {
  const buttonInlineStyling = {
    height: fullHeight ? '100%' : null,
  };
  return (
    <>
      {component === 'button' ? (
        <StyledButton sx={buttonInlineStyling} {...props}>
          {children}
        </StyledButton>
      ) : (
        <StyledMonthPicker sx={buttonInlineStyling} {...props}>
          {children}
        </StyledMonthPicker>
      )}
    </>
  );
};
