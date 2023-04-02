import { useEffect, useRef, useState } from 'react';
import { styled, useMediaQuery } from '@mui/material';
import Calculator from '../../images/Calculator.png';
import Image from 'next/image';
import { IChildren } from '../../model/IChildren';
import { theme } from '../../styles/theme/muiTheme';
import { Logo } from '../Logo/Logo';
import { LogoContainer } from '../Container/LogoContainer';
import { FormContainer } from '../Container/FormContainer';
import { AuthContainer } from '../Container/AuthContainer';

const IllustrationContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  backgroundColor: theme.palette.background.accent,
  gap: theme.spacing(3),
}));

const Illustration = styled('div')(({ theme }) => ({
  gridColumn: '2/-2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    width: '100%',
    height: '100%',
    // TODO: use dynamic width for maxWidth and height, and remove the multiple media queries
    maxWidth: '500px',
    objectFit: 'contain',

    [theme.breakpoints.up('lg')]: {
      maxWidth: '650px',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '750px',
    },
  },
}));

export const AuthLayout = ({ children }: IChildren) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  return (
    <AuthContainer>
      {!isDesktop && (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      )}

      {isDesktop && (
        <IllustrationContainer className='illustrationContainer'>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Illustration>
            <Image src={Calculator} alt='Calculator illustration' />
          </Illustration>
        </IllustrationContainer>
      )}

      <FormContainer> {children}</FormContainer>
    </AuthContainer>
  );
};
