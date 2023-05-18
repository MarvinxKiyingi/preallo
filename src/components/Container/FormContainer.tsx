import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

const StyledFormContainer = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  overflow: 'auto',

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    height: 'inherit',

    [theme.breakpoints.up('md')]: {
      height: 'fit-content',
    },
  },

  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    gap: theme.spacing(3),

    '>*': {
      gridColumn: '2/-2',
    },
  },
}));

export const FormContainer = ({ children }: IChildren) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};
