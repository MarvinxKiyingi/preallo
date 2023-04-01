import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { Xcode } from '../Icons';
import { ISvgProps } from '../SvgIcon/SvgIcon';

export type ILogo = {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
};

const StyledLogo = styled(Box)<{
  ownerState: ILogo;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  gap: theme.spacing(1 / 2),
  height: 'fit-content',

  '.logoIcon': {
    fontSize: ownerState.fontSizeMobile ? ownerState.fontSizeMobile : theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      fontSize: ownerState.fontSizeDesktop ? ownerState.fontSizeDesktop : theme.spacing(6),
    },
  },

  '.logoName': {
    fontFamily: 'Chivo',
    fontStyle: 'italic',
    fontWeight: 400,
    alignSelf: 'center',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.331rem',
    },
  },
}));
export const Logo = ({ fontSizeMobile, fontSizeDesktop, ...props }: ILogo & ISvgProps) => {
  const ownerState = {
    fontSizeMobile,
    fontSizeDesktop,
  };
  return (
    <StyledLogo ownerState={ownerState} {...props}>
      <Xcode className='logoIcon' {...props} />
      <Typography className='logoName' variant='h6' component={'span'}>
        code
      </Typography>
    </StyledLogo>
  );
};
