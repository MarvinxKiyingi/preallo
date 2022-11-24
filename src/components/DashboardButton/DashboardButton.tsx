import { IconButton, styled } from '@mui/material';
import React from 'react';
import { IIconButton } from '../AddButton/AddButton';
import { DashboardIcon } from '../Icons';

export const DashboardButton = ({ hasBgColor, fontSizeMobile, fontSizeDesktop, ...props }: IIconButton) => {
  const StyledDashboard = styled(IconButton)(({ theme }) => ({
    backgroundColor: hasBgColor ? theme.palette.common.white : 'transparent',
    fontSize: fontSizeMobile ? fontSizeMobile : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: fontSizeDesktop ? fontSizeDesktop : theme.spacing(6),
    },
  }));
  return (
    <StyledDashboard {...props}>
      <DashboardIcon fontSize='inherit' />
    </StyledDashboard>
  );
};
