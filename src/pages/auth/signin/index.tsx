import { Stack, Typography, styled, Box } from '@mui/material';
import { GoogleIcon } from '../../../components/Icons';
import { Button } from '../../../components/Button/Button';
import Link from 'next/link';
import { AuthLayout } from '../../../components/Layouts/AuthLayout/AuthLayout';
import { grey } from '../../../styles/colors/grey';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignIn } from '../../../model/ISignIn';
import { ISignInYupSchema } from '../../../model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../utils/context/AuthContext';
import { signIn } from 'next-auth/react';
import { SEO } from '../../../components/SEO';

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  marginBottom: 'unset',

  [theme.breakpoints.up('md')]: {
    ...theme.typography.h2,
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: grey.dark[500],
}));

export const Email = styled(Button)({});

export const Google = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: 'unset',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 0px 6px #4285F4',
  },
  '&:active': {
    backgroundColor: '#EEEEEE',
    boxShadow: '0px 0px 6px #4285F4',
  },
}));

export const CtaStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  textAlign: 'center',
}));

export const ForgottenPassword = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

export const SignUpLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

const SignIn = () => {
  const { handleSubmit } = useForm<ISignIn>({
    resolver: yupResolver(ISignInYupSchema),
  });

  const { signInUser } = useAuth();

  const formSubmitHandler: SubmitHandler<ISignIn> = (data: ISignIn) => {
    // console.log('data:', data);
    signInUser(data);
  };

  const description =
    'Ready to get organized? Sign in with Google to get started';

  return (
    <>
      <SEO
        title='Sign In to Preallo - Personal Finance Dashboard'
        description='Sign in to Preallo and start managing your personal finances. Access your dashboard, track expenses, and achieve your financial goals with our intuitive platform.'
        canonical='/auth/signin'
      />
      <AuthLayout>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Stack spacing={1} direction='column' mb={6}>
            <Title as={'h1'}>Sign in</Title>
            <Description>{description}</Description>
          </Stack>

          {/* <Stack spacing={2} direction='column'>
            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              label='Email'
              type='email'
              margin={'none'}
            />
            <TextField
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              label='Password'
              type='password'
              margin={'none'}
            />
          </Stack> */}

          <CtaStack>
            {/* <Email
              type='submit'
              fullHeight={false}
              fullWidth
              variant={'contained'}
            >
              Sign in
            </Email> */}

            <Google
              fullHeight={false}
              fullWidth
              variant={'contained'}
              startIcon={<GoogleIcon />}
              onClick={() => signIn('google')}
            >
              Sign in/up with google
            </Google>

            {/* <Stack spacing={1}>
              <Typography>
                Don't have an account?{' '}
                <SignUpLink href={'/auth/signup'}>Sign Up</SignUpLink>
              </Typography>

              <ForgottenPassword href={'/auth/resetpassword'}>
                Forgotten password?
              </ForgottenPassword>
            </Stack> */}
          </CtaStack>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignIn;
