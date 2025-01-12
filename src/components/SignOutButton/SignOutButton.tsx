import { IconButton } from '@mui/material';
import React from 'react';
import { IIconButtonProps } from '../IconButton/IconButton';
import SignOutIcon from '../Icons/SignOutIcon';
import { signOut } from 'next-auth/react';

export const SignOutButton = ({ ...props }: IIconButtonProps) => {
  return (
    <IconButton
      className='signOutButton-container'
      onClick={() => signOut()}
      {...props}
    >
      <SignOutIcon fontSize='inherit' />
    </IconButton>
  );
};
