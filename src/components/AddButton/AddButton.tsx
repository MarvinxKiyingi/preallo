import { IIconButtonProps, IconButton } from '../IconButton/IconButton';
import React from 'react';
import { styled } from '@mui/material';
import PlusIcon from '../Icons/PlusIcon';
import { Button } from '../Button/Button';
export interface IIconButton extends IIconButtonProps {
  /** Primary is the default icon button, where the secondary is a custom version */
  version: 'primary' | 'secondary';
}

const StyledDefaultIcon = styled(IconButton)<{
  ownerState: IIconButton;
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.hasBgColor
    ? theme.palette.common.white
    : 'transparent',
  fontSize: ownerState.fontSizeMobile
    ? ownerState.fontSizeMobile
    : theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    fontSize: ownerState.fontSizeDesktop
      ? ownerState.fontSizeDesktop
      : theme.spacing(6),
  },
}));

const StyledSecondaryIcon = styled(Button)(({ theme }) => ({
  width: 77,
  height: 28,
  borderRadius: theme.spacing(),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1 / 2),
}));

export const AddButton = ({
  fontSizeMobile,
  fontSizeDesktop,
  hasBgColor,
  version,
  color,
  ...props
}: IIconButton) => {
  const ownerState = {
    fontSizeMobile,
    fontSizeDesktop,
    hasBgColor,
    version,
    color,
  };
  return (
    <>
      {version === 'secondary' ? (
        <StyledSecondaryIcon
          className='addButton-secondary'
          variant='contained'
          color='secondary'
          component='button'
          {...props}
        >
          <PlusIcon />
        </StyledSecondaryIcon>
      ) : (
        <StyledDefaultIcon
          className='addButton-default'
          ownerState={ownerState}
          color={color}
          {...props}
        >
          <PlusIcon fontSize='inherit' />
        </StyledDefaultIcon>
      )}
    </>
  );
};
