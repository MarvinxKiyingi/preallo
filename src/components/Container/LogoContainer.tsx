import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

const StyledLogoContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 0, 6, 0),
  height: 'fit-content',
  gridColumn: '1/-1',

  [theme.breakpoints.up('sm')]: {
    margin: theme.spacing(6, 0, 9, 0),
    gridColumn: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    gap: theme.spacing(3),

    '>*': {
      gridColumn: '2/-2',
    },
  },

  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(6, 0, 0, 6),
    position: 'absolute',
  },
}));

export const LogoContainer = ({ children }: IChildren) => {
  return <StyledLogoContainer>{children}</StyledLogoContainer>;
};
