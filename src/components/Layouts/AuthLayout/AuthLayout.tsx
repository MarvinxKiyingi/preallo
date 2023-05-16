import { styled, useMediaQuery } from '@mui/material';
import Calculator from '../../../images/Calculator.png';
import lockIllustration from '../../../images/PasswordLockIllustration.png';
import Image from 'next/image';
import { IChildren } from '../../../model/IChildren';
import { theme } from '../../../styles/theme/muiTheme';
import { Logo } from '../../Logo/Logo';
import { LogoContainer } from '../../Container/LogoContainer';
import { FormContainer } from '../../Container/FormContainer';
import { AuthContainer } from '../../Container/AuthContainer';
import { useRouter } from 'next/router';

const IllustrationContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  gridTemplateRows: 'repeat(6,1fr)',
  backgroundColor: theme.palette.background.accent,
  gap: theme.spacing(3),
  height: 'inherit',
}));

const Illustration = styled('div')({
  gridColumn: '2/-2',
  gridRow: '2/-2',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});

export const AuthLayout = ({ children }: IChildren) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const router = useRouter();
  const isResetPassword = router.pathname.includes('/auth/resetpassword');

  return (
    <AuthContainer>
      {!isDesktop && (
        <>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <FormContainer> {children}</FormContainer>
        </>
      )}

      {isDesktop && (
        <>
          <IllustrationContainer className='illustrationContainer'>
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <Illustration>
              <Image
                src={!isResetPassword ? Calculator : lockIllustration}
                alt={
                  !isResetPassword
                    ? 'Calculator illustration'
                    : 'Password Lock Illustration'
                }
                priority
              />
            </Illustration>
          </IllustrationContainer>

          <FormContainer> {children}</FormContainer>
        </>
      )}
    </AuthContainer>
  );
};
