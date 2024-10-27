import { styled } from '@mui/material';
import React from 'react';
import { IChildren } from '../../model/IChildren';

interface IAppContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const StyledDesktopContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12,1fr)',
    gridTemplateRows: 'repeat(12,1fr)',
    height: '100%',
    gap: theme.spacing(3),
    overflow: 'hidden',
  },

  '>:first-of-type': {
    gridColumn: '1/4',
    gridRow: '1/-1',
  },
  '>:nth-of-type(2)': {
    gridColumn: '4/-1',
    gridRow: '1/-1',
  },
}));
const DesktopContainer = ({ children }: IAppContainer) => {
  return <StyledDesktopContainer>{children}</StyledDesktopContainer>;
};

export default DesktopContainer;
