import React from 'react';
import { IconButtonProps as MuiIconButtonProps, styled, IconButton as MuiIconButton } from '@mui/material';
// Only include
type IMuiIconButtonProps = Pick<MuiIconButtonProps, 'size' | 'color' | 'disableRipple' | 'disabled' | 'children'>;

export interface IIconButtonProps extends IMuiIconButtonProps {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  hasBgColor?: boolean;
  onClick?: () => void;
  className?: string;
}
const StyledIcon = styled(MuiIconButton)<{ ownerState: IIconButtonProps }>(({ theme, ownerState }) => ({
  width: 'fit-content',
  backgroundColor: ownerState.hasBgColor ? theme.palette.common.white : 'transparent',
  fontSize: ownerState.fontSizeMobile ? ownerState.fontSizeMobile : theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    fontSize: ownerState.fontSizeDesktop ? ownerState.fontSizeDesktop : theme.spacing(6),
  },
}));

export const IconButton = ({ hasBgColor, fontSizeMobile, fontSizeDesktop, children, ...props }: IIconButtonProps) => {
  const ownerState = {
    hasBgColor,
    fontSizeDesktop,
    fontSizeMobile,
  };
  return (
    <StyledIcon ownerState={ownerState} {...props}>
      {children}
    </StyledIcon>
  );
};
