import { styled, useMediaQuery } from '@mui/material';
import Calculator from '../../images/Calculator.png';
import Image from 'next/image';
import { IChildren } from '../../model/IChildren';
import { theme } from '../../styles/theme/muiTheme';
import { Logo } from '../Logo/Logo';
import { LogoContainer } from '../Container/LogoContainer';
import { FormContainer } from '../Container/FormContainer';
import { AuthContainer } from '../Container/AuthContainer';

const Illustration = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  backgroundColor: theme.palette.background.accent,
  gap: theme.spacing(3),

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    gridColumn: '2/-2',
  },
}));

export const AuthLayout = ({ children }: IChildren) => {
  const isDesktop = useMediaQuery(`${theme.breakpoints.up('md').replace('@media ', '')}`);

  return (
    <AuthContainer>
      {!isDesktop && (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      )}

      {isDesktop && (
        <Illustration className='illustration'>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Image alt='calculator-illustration' src={Calculator} />
        </Illustration>
      )}

      <FormContainer> {children}</FormContainer>
    </AuthContainer>
  );
};
