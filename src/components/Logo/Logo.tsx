import { styled } from '@mui/material';
import React from 'react';
import { Preallo } from '../Icons';
import { ISvgProps } from '../SvgIcon/SvgIcon';
import Link from 'next/link';

type IPickedSvgProps = Pick<ISvgProps, 'color' | 'sx'>;

const StyledLogo = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: theme.palette.common.black,

  '.logoIcon': {
    width: 'fit-content',
    height: 'fit-content',
  },
}));

export const Logo = ({ color = 'inherit', ...props }: IPickedSvgProps) => {
  return (
    <StyledLogo href={'/'} {...props} color={color}>
      <Preallo className='logoIcon' color={color} {...props} />
    </StyledLogo>
  );
};
