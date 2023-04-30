import { Box, Stack, TextField, Typography, styled } from '@mui/material';
import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ISignUp } from '../../../model/ISignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpYupSchema } from '../../../model/IYupSchema';
import { useAuth } from '../../../utils/context/AuthContext';
import { grey } from '../../../styles/colors/grey';
import { Button } from '../../../components/Button/Button';
import Link from 'next/link';
import Head from 'next/head';

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  marginBottom: 'unset',
}));

export const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: grey.dark[500],
}));

export const Email = styled(Button)({});

export const CtaStack = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(3),
  gap: theme.spacing(3),
  textAlign: 'center',
}));

export const ForgottenPassword = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  textDecoration: 'none',
  display: 'flex',
  alignSelf: 'end',
  color: theme.palette.secondary.main,
}));

export const SignInLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({ resolver: yupResolver(ISignUpYupSchema) });

  const { signUpUser } = useAuth();

  const formSubmitHandler: SubmitHandler<ISignUp> = (data: ISignUp) => {
    // console.log('data:', data);
    signUpUser(data);
  };

  const description = 'Type in your credentials, to get started';

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta name='description' content={description} />
      </Head>
      <AuthLayout>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Stack spacing={1} direction='column' mb={6}>
            <Title as={'h1'}>Sign up</Title>
            <Description>{description}</Description>
          </Stack>

          <Stack spacing={2} direction='column'>
            <TextField
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName?.message : ''}
              label='First name'
              margin={'none'}
            />

            <TextField
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName?.message : ''}
              label='Last name'
              margin={'none'}
            />

            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              label='Email'
              margin={'none'}
            />

            <TextField
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
              label='Password'
              margin={'none'}
              type='password'
            />

            <TextField
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={
                errors.confirmPassword ? errors.confirmPassword?.message : ''
              }
              label='Confirm password'
              margin={'none'}
              type='password'
            />
          </Stack>

          <CtaStack>
            <Email
              type='submit'
              fullHeight={false}
              fullWidth
              variant={'contained'}
              version='button'
            >
              Sign up
            </Email>

            <Typography pb={4}>
              Already have an account?{' '}
              <SignInLink href={'/auth/signin'}>Sign In</SignInLink>
            </Typography>
          </CtaStack>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignUp;
