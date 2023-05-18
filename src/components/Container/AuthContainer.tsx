import React from 'react';
import { IChildren } from '../../model/IChildren';
import { styled } from '@mui/material';

interface IAuthContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const Container = styled('main')<{
  ownerState: IAuthContainer;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: theme.spacing(3, 3, 0, 3),

  [theme.breakpoints.up('sm')]: {
    padding: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    padding: 'unset',
    gridTemplateColumns: ownerState.desktopColumns
      ? ownerState.desktopColumns
      : '1.3fr 1fr',
  },
}));

export const AuthContainer = ({
  children,
  desktopColumns = '1.3fr 1fr',
}: IAuthContainer) => {
  const ownerState = {
    children,
    desktopColumns,
  };
  return <Container ownerState={ownerState}>{children}</Container>;
};
