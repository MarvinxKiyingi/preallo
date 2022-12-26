import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

// Only include
type ButtonBaseProps = Pick<
  MuiButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'children'
  | 'fullWidth'
  | 'href'
  | 'onClick'
  | 'disabled'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'type'
  | 'startIcon'
  | 'endIcon'
  | 'sx'
>;

export interface IButtonProps extends ButtonBaseProps {
  onClick?: () => void;
  children?: React.ReactNode;
  fullHeight?: boolean;
  component?: 'button' | 'monthPicker';
  iconSize?: string;
}

const StyledButton = styled(MuiButton)<{ ownerState: IButtonProps }>(({ ownerState, theme }) => ({
  borderRadius: '0.5rem',
  height: ownerState.fullWidth ? '100%' : undefined,
  padding: '1.031rem 0.875rem',

  '.MuiButton-startIcon>*': {
    fontSize: ownerState.iconSize ? ownerState.iconSize : theme.spacing(3),
  },
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

export const Button = ({ children, fullHeight, iconSize, component, ...props }: IButtonProps) => {
  const ownerState = {
    fullHeight,
    iconSize,
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
