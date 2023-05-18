import { Box, Stack, TextField, Typography, styled } from '@mui/material';
import { AuthLayout } from '../../../components/Layouts/AuthLayout/AuthLayout';
import Link from 'next/dist/client/link';
import { Button } from '../../../components/Button/Button';
import { grey } from '../../../styles/colors/grey';
import { yupResolver } from '@hookform/resolvers/yup';
import { IPasswordReset } from '../../../model/IPasswordReset';
import { IPasswordResetYupSchema } from '../../../model/IYupSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../../utils/context/AuthContext';
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

export const SignInLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswordReset>({
    resolver: yupResolver(IPasswordResetYupSchema),
  });

  const { passwordReset } = useAuth();

  const formSubmitHandler: SubmitHandler<IPasswordReset> = (
    data: IPasswordReset
  ) => {
    console.log('data:', data);
    passwordReset(data);
  };

  const description =
    'Type in your user email to receive instructions on how to reset your password.';

  return (
    <>
      <Head>
        <title>Password reset</title>
        <meta name='description' content={description} />
      </Head>
      <AuthLayout>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Stack spacing={1} direction='column' mb={6}>
            <Title as={'h1'}>
              Password
              <br />
              reset
            </Title>
            <Description>{description}</Description>
          </Stack>

          <Stack spacing={2} direction='column'>
            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
              label='Email'
              type='email'
              margin={'none'}
            />
          </Stack>

          <CtaStack>
            <Email
              type='submit'
              fullHeight={false}
              fullWidth
              variant={'contained'}
            >
              Reset password
            </Email>

            <Stack spacing={1}>
              <Typography>
                Already have an account?{' '}
                <SignInLink href={'/auth/signin'}>Sign In</SignInLink>
              </Typography>
            </Stack>
          </CtaStack>
        </form>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
