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

export const IconButton = ({ hasBgColor, fontSizeMobile, fontSizeDesktop, children, ...props }: IIconButtonProps) => {
  const StyledIcon = styled(MuiIconButton)(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: hasBgColor ? theme.palette.common.white : 'transparent',
    fontSize: fontSizeMobile ? fontSizeMobile : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: fontSizeDesktop ? fontSizeDesktop : theme.spacing(6),
    },
  }));
  return <StyledIcon {...props}>{children}</StyledIcon>;
};
