import { Typography, styled, Box } from '@mui/material';
import React from 'react';
import { AddButton } from '../AddButton/AddButton';
import { IIconButtonProps } from '../IconButton/IconButton';

export interface IAddRowProps extends IIconButtonProps {
  title: string;
  addIsVisible?: boolean;
  renewIsVisible?: boolean;
}

export const StyledAddRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  color: theme.palette.common.black,
  '.title': {
    ...theme.typography.h6,
    fontWeight: 600,
    fontSize: '1rem',
    [theme.breakpoints.up('lg')]: {
      ...theme.typography.h5,
      fontWeight: 600,
    },
  },
  '.buttonGroup': {
    display: 'flex',
    gap: theme.spacing(),
  },
}));

export const AddRow = ({ title, addIsVisible, ...props }: IAddRowProps) => {
  return (
    <StyledAddRow className='addRow-container'>
      <Typography className='title' variant='h5' component={'h3'}>
        {title}
      </Typography>

      <div className='buttonGroup'>{addIsVisible && <AddButton {...props} />}</div>
    </StyledAddRow>
  );
};
