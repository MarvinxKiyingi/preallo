import { IconButton } from '@mui/material';
import React from 'react';
import { Avatar, IAvatar } from '../Avatar/Avatar';
import { IIconButtonProps } from '../IconButton/IconButton';
import Link from 'next/link';

export const ProfileButton = ({
  onClick,
  ...props
}: IIconButtonProps & IAvatar) => {
  return (
    <IconButton
      className='profileButton-container'
      LinkComponent={Link}
      href='/profile'
      {...props}
    >
      <Avatar {...props} />
    </IconButton>
  );
};
