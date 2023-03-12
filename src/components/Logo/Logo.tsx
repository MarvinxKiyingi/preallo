import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { BlueprintIcon } from '../Icons';
import { ISvgProps } from '../SvgIcon/SvgIcon';

export type ILogo = {
  fontSizeMobile?: string;
  fontSizeDesktop?: string;
};

const StyledLogo = styled(Box)<{
  ownerState: ILogo;
}>(({ theme, ownerState }) => ({
  display: 'flex',
  gap: theme.spacing(),

  '.logoIcon': {
    fontSize: ownerState.fontSizeMobile ? ownerState.fontSizeMobile : theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      fontSize: ownerState.fontSizeDesktop ? ownerState.fontSizeDesktop : theme.spacing(6),
    },
  },

  '.logoName': {
    fontWeight: 400,
    fontStyle: 'italic',
    alignSelf: 'center',
    textTransform: 'uppercase',
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
      <BlueprintIcon className='logoIcon' {...props} />
      <Typography className='logoName' variant='h6' component={'span'}>
        Xcode
      </Typography>
    </StyledLogo>
  );
};
