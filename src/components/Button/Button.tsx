import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from '@mui/material';

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
  | 'startIcon'
  | 'endIcon'
  | 'sx'
  | 'type'
>;

export interface IButtonProps extends ButtonBaseProps {
  children?: React.ReactNode;
  fullHeight?: boolean;
  /** If `"monthPicker"`, the button will change appearance */
  version?: 'button' | 'monthPicker';
  iconSize?: string;
  className?: string;
}

const StyledButton = styled(MuiButton)<{ ownerState: IButtonProps }>(
  ({ ownerState, theme }) => ({
    borderRadius: 8,
    height: ownerState.fullHeight ? '100%' : undefined,
    padding: theme.spacing(2, 2),

    ':active': {
      transition: '0.2s',
      transform: 'scale(0.98)',
    },

    '.MuiButton-startIcon>*': {
      fontSize: ownerState.iconSize ? ownerState.iconSize : theme.spacing(3),
    },
  })
);

const StyledMonthPicker = styled(MuiButton)<{ ownerState: IButtonProps }>(
  ({ ownerState, theme }) => ({
    height: ownerState.fullHeight ? '100%' : undefined,
    borderRadius: 8,
    padding: theme.spacing(4, 15),
    fontSize: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: 'initial',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(2.25),
    },
  })
);

export const Button = ({
  children,
  fullHeight,
  iconSize,
  version = 'button',
  ...props
}: IButtonProps) => {
  const ownerState = {
    fullHeight,
    iconSize,
  };
  return (
    <>
      {version === 'button' ? (
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
