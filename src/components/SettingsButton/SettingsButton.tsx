import { IconButton } from '@mui/material';
import React from 'react';

import { IIconButtonProps } from '../IconButton/IconButton';
import Link from 'next/link';
import { SettingsIcon } from '../Icons';

export const SettingsButton = ({ ...props }: IIconButtonProps) => {
  return (
    <IconButton
      className='settingsButton-container'
      LinkComponent={Link}
      href='/settings'
      {...props}
    >
      <SettingsIcon fontSize='inherit' />
    </IconButton>
  );
};
