import { IconButton } from '@mui/material';
import React from 'react';
import { IIconButton } from '../AddButton/AddButton';
import { DashboardIcon } from '../Icons';

export const DashboardButton = (props: IIconButton) => {
  return (
    <IconButton {...props}>
      <DashboardIcon fontSize='inherit' />
    </IconButton>
  );
};
