import { Stack, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../../../components/Layouts/AuthLayout';
import {
  CtaStack,
  Description,
  Email,
  Google,
  SignInLink,
  Title,
} from './SignUp.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoogleIcon } from '../../../components/Icons';
import { ISignUp } from '../../../model/ISignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpYupSchema } from '../../../model/IYupSchema';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({ resolver: yupResolver(ISignUpYupSchema) });

  const formSubmitHandler: SubmitHandler<ISignUp> = (data: ISignUp) => {
    console.log('data:', data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Stack spacing={1} direction='column' mb={6}>
          <Title>Sign up</Title>
          <Description>Type in your credentials, to get started</Description>
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
          />

          <TextField
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword?.message : ''
            }
            label='Confirm password'
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
          >
            Sign in with google
          </Google>

          <Typography pb={4}>
            Already have an account? <SignInLink href={'#'}>Sign In</SignInLink>
          </Typography>
        </CtaStack>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
