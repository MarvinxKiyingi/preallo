import React from 'react';
import { Avatar as MuiAvatar, styled } from '@mui/material';

export interface IAvatar {
  url?: string;
  mobileSize?: string;
  deskSize?: string;
}

export const Avatar = ({ url, mobileSize, deskSize }: IAvatar) => {
  const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
    width: mobileSize ? mobileSize : theme.spacing(3),
    height: mobileSize ? mobileSize : theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: deskSize ? deskSize : theme.spacing(6),
      height: deskSize ? deskSize : theme.spacing(6),
    },
  }));
  return (
    <StyledAvatar className='avatar-container' src={url}>
      Avatar
    </StyledAvatar>
  );
};
