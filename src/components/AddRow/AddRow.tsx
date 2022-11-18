import { Typography, styled, Box } from '@mui/material';
import React from 'react';
import { AddButton, IAddButtonProps } from '../AddButton/AddButton';

export interface IAddRowProps extends IAddButtonProps {
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

export const AddRow = ({ title, ...props }: IAddRowProps) => {
  return (
    <StyledAddRow>
      <Typography variant='h5' component={'h3'}>
        {title}
      </Typography>
      <AddButton {...props} />
    </StyledAddRow>
  );
};
