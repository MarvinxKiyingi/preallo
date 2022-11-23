import { IconButton } from '@mui/material';
import React from 'react';
import { IIconButton } from '../AddButton/AddButton';
import { Avatar, IAvatar } from '../Avatar/Avatar';

export const ProfileButton = ({ ...props }: IIconButton & IAvatar) => {
  return (
    <IconButton {...props}>
      <Avatar {...props} />
    </IconButton>
  );
};
