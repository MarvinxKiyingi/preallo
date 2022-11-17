import { Typography, styled, Box } from '@mui/material';
import React from 'react';
import { AddButton } from '../AddButton/AddButton';

export interface IAddRowProps {
  title: string;
}

export const StyledAddRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  color: theme.palette.common.black,
  h3: {
    ...theme.typography.h6,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h5,
      fontWeight: 600,
    },
  },
}));

export const AddRow = ({ title }: IAddRowProps) => {
  return (
    <StyledAddRow>
      <Typography variant='h5' component={'h3'}>
        {title}
      </Typography>
      <AddButton fontSizeMobile='2rem' fontSizeDesktop='2.5rem' size='small' color='inherit' />
    </StyledAddRow>
  );
};
