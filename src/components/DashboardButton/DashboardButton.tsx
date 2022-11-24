import React from 'react';
import { IconButton, IIconButtonProps } from '../IconButton/IconButton';

import { DashboardIcon } from '../Icons';

export const DashboardButton = (props: IIconButtonProps) => {
  return (
    <IconButton {...props}>
      <DashboardIcon fontSize='inherit' />
    </IconButton>
  );
};
