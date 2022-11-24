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
  h3: {
    ...theme.typography.h6,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h5,
      fontWeight: 600,
    },
  },
}));
export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(),
}));

export const AddRow = ({ title, renewIsVisible, addIsVisible, ...props }: IAddRowProps) => {
  return (
    <StyledAddRow>
      <Typography variant='h5' component={'h3'}>
        {title}
      </Typography>

      <ButtonGroup>
        {renewIsVisible && <RenewButton {...props} />}
        {addIsVisible && <AddButton {...props} />}
      </ButtonGroup>
    </StyledAddRow>
  );
};
