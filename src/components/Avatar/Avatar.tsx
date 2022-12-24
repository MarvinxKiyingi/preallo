import React from 'react';
import { Avatar as MuiAvatar, styled } from '@mui/material';

export interface IAvatar {
  url?: string;
  mobileSize?: string;
  deskSize?: string;
}

const StyledAvatar = styled(MuiAvatar)<{ ownerState: IAvatar }>(({ theme, ownerState }) => ({
  width: ownerState.mobileSize ? ownerState.mobileSize : theme.spacing(3),
  height: ownerState.mobileSize ? ownerState.mobileSize : theme.spacing(3),
  [theme.breakpoints.up('lg')]: {
    width: ownerState.deskSize ? ownerState.deskSize : theme.spacing(6),
    height: ownerState.deskSize ? ownerState.deskSize : theme.spacing(6),
  },
}));

export const Avatar = ({ url, mobileSize, deskSize }: IAvatar) => {
  const ownerState = {
    mobileSize,
    deskSize,
  };
  return (
    <StyledAvatar className='avatar-container' src={url} ownerState={ownerState}>
      Avatar
    </StyledAvatar>
  );
};
