import { IconButton } from '@mui/material';
import React from 'react';
import { IIconButtonProps } from '../IconButton/IconButton';
import SignOutIcon from '../Icons/SignOutIcon';
import { signOut } from 'next-auth/react';
import { theme } from '../../styles/theme/muiTheme';

export const SignOutButton = ({ ...props }: IIconButtonProps) => {
  return (
    <IconButton
      className='signOutButton-container'
      onClick={() => signOut()}
      {...props}
      sx={{ padding: theme.spacing(0.5, '2px', 0.5, '6px') }}
    >
      <SignOutIcon fontSize='inherit' />
    </IconButton>
  );
};
