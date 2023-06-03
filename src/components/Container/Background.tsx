import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

const StyledBackground = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: theme.palette.background.default,

  [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
    height: 'unset',
  },
}));

const Background = ({ children }: IChildren) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
