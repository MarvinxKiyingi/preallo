import { Typography, styled, Box } from '@mui/material';
import React from 'react';
import { AddButton } from '../AddButton/AddButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { RenewButton } from '../RenewButton/RenewButton';

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
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h5,
      fontWeight: 600,
    },
  },
  '.buttonGroup': {
    display: 'flex',
    gap: theme.spacing(),
  },
}));

export const AddRow = ({ title, renewIsVisible, addIsVisible, ...props }: IAddRowProps) => {
  return (
    <StyledAddRow className='addRow-container'>
      <Typography className='title' variant='h5' component={'h3'}>
        {title}
      </Typography>

      <div className='buttonGroup'>
        {renewIsVisible && <RenewButton {...props} />}
        {addIsVisible && <AddButton {...props} />}
      </div>
    </StyledAddRow>
  );
};
