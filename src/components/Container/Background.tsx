import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

const StyledBackground = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,

  [`${theme.breakpoints.between(0, 'md')} and (orientation: landscape)`]: {
    height: 'unset',
  },
}));

const Background = ({ children }: IChildren) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
