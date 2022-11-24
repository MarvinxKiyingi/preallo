import { IconButton } from '@mui/material';
import React from 'react';
import { Avatar, IAvatar } from '../Avatar/Avatar';
import { IIconButtonProps } from '../IconButton/IconButton';

export const ProfileButton = ({ ...props }: IIconButtonProps & IAvatar) => {
  return (
    <IconButton {...props}>
      <Avatar {...props} />
    </IconButton>
  );
};
