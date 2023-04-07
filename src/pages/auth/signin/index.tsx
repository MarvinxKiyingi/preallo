import { Stack, Typography, TextField, styled, Box } from '@mui/material';
import { GoogleIcon } from '../../../components/Icons';
import { Button } from '../../../components/Button/Button';
import Link from 'next/link';
import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import { grey } from '../../../styles/colors/grey';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignIn } from '../../../model/ISignIn';
import { ISignInYupSchema } from '../../../model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../utils/context/AuthContext';

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
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
  marginTop: theme.spacing(3),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({ resolver: yupResolver(ISignInYupSchema) });

  const { signInUser, googleSignIn } = useAuth();

  const formSubmitHandler: SubmitHandler<ISignIn> = (data: ISignIn) => {
    console.log('data:', data);
    signInUser(data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Stack spacing={1} direction='column' mb={6}>
          <Title>Sign in</Title>
          <Description>
            Ready to get organized? Type in your credentials, to get started
          </Description>
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
          <TextField
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
            label='Password'
            type='password'
            margin={'none'}
          />
        </Stack>

        <CtaStack>
          <Email
            type='submit'
            fullHeight={false}
            fullWidth
            variant={'contained'}
            component='button'
          >
            Sign in
          </Email>

          <Google
            fullHeight={false}
            fullWidth
            variant={'contained'}
            component='button'
            startIcon={<GoogleIcon />}
            onClick={() => googleSignIn()}
          >
            Sign in/up with google
          </Google>

          <Stack spacing={1}>
            <Typography>
              Don’t have an account?{' '}
              <SignUpLink href={'/auth/signup'}>Sign Up</SignUpLink>
            </Typography>

            <ForgottenPassword href={'#'}>
              Forgotten password?
            </ForgottenPassword>
          </Stack>
        </CtaStack>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
