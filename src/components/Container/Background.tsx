import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

const StyledBackground = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: '100%',
  backgroundColor: theme.palette.background.default,
}));

const Background = ({ children }: IChildren) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
