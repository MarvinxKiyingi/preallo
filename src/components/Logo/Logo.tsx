import { styled, Typography } from '@mui/material';
import React from 'react';
import { Preallo } from '../Icons';
import { ISvgProps } from '../SvgIcon/SvgIcon';
import Link from 'next/link';

export type ILogo = {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
};

const StyledLogo = styled(Link)<{
  ownerState: ILogo;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  gap: theme.spacing(1 / 2),
  height: 'fit-content',
  width: 'fit-content',
  textDecoration: 'none',
  color: theme.palette.common.black,

  '.logoIcon': {
    fontSize: ownerState.fontSizeMobile
      ? ownerState.fontSizeMobile
      : theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: ownerState.fontSizeDesktop
        ? ownerState.fontSizeDesktop
        : theme.spacing(6),
    },
  },

  '.logoName': {
    fontStyle: 'italic',
    fontWeight: 400,
    alignSelf: 'center',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.331rem',
    },
  },
}));
export const Logo = ({
  fontSizeMobile,
  fontSizeDesktop,
  color = 'inherit',
  ...props
}: ILogo & ISvgProps) => {
  const ownerState = {
    fontSizeMobile,
    fontSizeDesktop,
    color,
  };
  return (

    <StyledLogo href={'/'} ownerState={ownerState} {...props} color={color}>
      <Preallo className='logoIcon' color={color} {...props} />
    </StyledLogo>
  );
};
