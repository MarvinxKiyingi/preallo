import { IconButton } from '../IconButton/IconButton';
import React from 'react';
import { IconButtonProps as MuiIconButtonProps, styled } from '@mui/material';
import PlusIcon from '../Icons/PlusIcon';
import { Button } from '../Button/Button';

// Only include
type IconButtonProps = Pick<MuiIconButtonProps, 'size' | 'disabled'>;
export interface IIconButton extends IconButtonProps {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
  hasBgColor?: boolean;
  onClick?: () => void;
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

const StyledSecondaryIcon = styled(Button)<{
  ownerState: IIconButton;
}>(({ theme }) => ({
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
  ...props
}: IIconButton) => {
  const ownerState = {
    fontSizeMobile,
    fontSizeDesktop,
    hasBgColor,
    version,
  };
  return (
    <>
      {version === 'secondary' ? (
        <StyledSecondaryIcon
          className='addButton-secondary'
          variant='contained'
          color='secondary'
          component='button'
          ownerState={ownerState}
          {...props}
        >
          <PlusIcon />
        </StyledSecondaryIcon>
      ) : (
        <StyledDefaultIcon
          className='addButton-default'
          ownerState={ownerState}
          {...props}
        >
          <PlusIcon fontSize='inherit' />
        </StyledDefaultIcon>
      )}
    </>
  );
};
