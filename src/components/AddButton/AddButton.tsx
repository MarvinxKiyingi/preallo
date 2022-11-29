import { IconButton } from '../IconButton/IconButton';
import React from 'react';
import { IconButtonProps as MuiIconButtonProps, styled } from '@mui/material';
import PlusIcon from '../Icons/PlusIcon';

// Only include
type IconButtonProps = Pick<MuiIconButtonProps, 'size' | 'color' | 'disableRipple' | 'disabled'>;
export interface IIconButton extends IconButtonProps {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  hasBgColor?: boolean;
  onClick?: () => void;
}

const StyledIconButton = styled(IconButton)<{
  ownerState: IIconButton;
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.hasBgColor ? theme.palette.common.white : 'transparent',
  fontSize: ownerState.fontSizeMobile ? ownerState.fontSizeMobile : theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    fontSize: ownerState.fontSizeDesktop ? ownerState.fontSizeDesktop : theme.spacing(6),
  },
}));

export const AddButton = ({ fontSizeMobile, fontSizeDesktop, hasBgColor, ...props }: IIconButton) => {
  const ownerState = {
    fontSizeMobile,
    fontSizeDesktop,
    hasBgColor,
  };
  return (
    <StyledIconButton className='addButton-container' ownerState={ownerState} {...props}>
      <PlusIcon fontSize='inherit' />
    </StyledIconButton>
  );
};
