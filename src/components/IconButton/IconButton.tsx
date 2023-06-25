import React from 'react';
import {
  IconButtonProps as MuiIconButtonProps,
  styled,
  IconButton as MuiIconButton,
} from '@mui/material';
// Only include
type IMuiIconButtonProps = Pick<
  MuiIconButtonProps,
  | 'size'
  | 'color'
  | 'disabled'
  | 'children'
  | 'onClick'
  | 'className'
  | 'sx'
  | 'LinkComponent'
>;

export interface IIconButtonProps extends IMuiIconButtonProps {
  /** Pass in a css string to control the icon size in mobile view  */
  fontSizeMobile?: string;

  /** Pass in a css string to control the icon size in Desktop view  */
  fontSizeDesktop?: string;

  /** If true, the icon background color would be set to white. */
  hasBgColor?: boolean;

  href?: string;
}
const StyledIcon = styled(MuiIconButton)<{ ownerState: IIconButtonProps }>(
  ({ theme, ownerState }) => ({
    width: 'fit-content',
    backgroundColor: ownerState.hasBgColor
      ? theme.palette.common.white
      : 'transparent',
    fontSize: ownerState.fontSizeMobile
      ? ownerState.fontSizeMobile
      : theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      fontSize: ownerState.fontSizeDesktop
        ? ownerState.fontSizeDesktop
        : theme.spacing(6),
    },
  })
);

export const IconButton = ({
  hasBgColor = false,
  fontSizeMobile = '24',
  fontSizeDesktop = '48',
  children,
  ...props
}: IIconButtonProps) => {
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
