import React from 'react';
import { IconButton, IIconButtonProps } from '../IconButton/IconButton';

import { DashboardIcon } from '../Icons';

export const DashboardButton = ({
  fontSizeMobile = '24px',
  fontSizeDesktop = '48px',
  hasBgColor = false,
  disabled = false,
  ...props
}: IIconButtonProps) => {
  return (
    <IconButton
      className='dashboardButton-container'
      fontSizeMobile={fontSizeMobile}
      fontSizeDesktop={fontSizeDesktop}
      hasBgColor={hasBgColor}
      disabled={disabled}
      {...props}
    >
      <DashboardIcon fontSize='inherit' />
    </IconButton>
  );
};
