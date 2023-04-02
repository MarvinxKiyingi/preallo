import React from 'react';
import { IChildren } from '../../model/IChildren';
import { styled } from '@mui/material';

const Container = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3, 3, 0, 3),

  [theme.breakpoints.up('sm')]: {
    padding: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    padding: 'unset',
    gridTemplateColumns: '1.5fr 1fr',
  },
}));

export const AuthContainer = ({ children }: IChildren) => {
  return <Container>{children}</Container>;
};
