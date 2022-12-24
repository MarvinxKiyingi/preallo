import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<
  MuiButtonProps,
  'variant' | 'size' | 'color' | 'children' | 'fullWidth' | 'href' | 'onClick' | 'disabled' | 'disableFocusRipple' | 'disableRipple'
>;

export interface IButtonProps extends ButtonBaseProps {
  onClick?: () => void;
  children?: React.ReactNode;
  fullHeight?: boolean;
  component?: 'button' | 'monthPicker';
}

const StyledButton = styled(MuiButton)<{ ownerState: IButtonProps }>(({ ownerState }) => ({
  borderRadius: '0.625rem',
  height: ownerState.fullWidth ? '100%' : undefined,
}));

const StyledMonthPicker = styled(MuiButton)<{ ownerState: IButtonProps }>(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(4, 15),
  fontSize: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(9, 13),
    fontSize: theme.spacing(2.25),
  },
}));

export const Button = ({ children, fullHeight, component, ...props }: IButtonProps) => {
  const ownerState = {
    fullHeight,
  };
  return (
    <>
      {component === 'button' ? (
        <StyledButton ownerState={ownerState} {...props}>
          {children}
        </StyledButton>
      ) : (
        <StyledMonthPicker ownerState={ownerState} {...props}>
          {children}
        </StyledMonthPicker>
      )}
    </>
  );
};
