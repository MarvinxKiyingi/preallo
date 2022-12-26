import { Stack, FormControl, Typography } from '@mui/material';
import React from 'react';
import Container from '../../../components/Container/Container';
import { GoogleIcon } from '../../../components/Icons';
import { Input } from '../../../components/Input/Input';
import { Logo } from '../../../components/Logo/Logo';
import {
  CtaStack,
  Email,
  ForgottenPassword,
  Google,
  LogoWrapper,
  SignUpLink,
  StyledSignIn,
  Title,
  Wrapper,
} from './SignIn.styles';

const SignIn = () => {
  return (
    <Container>
      <StyledSignIn>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Wrapper>
          <Title variant='h1'>Sign in</Title>
          <FormControl fullWidth margin='none'>
            <Stack spacing={2} direction='column'>
              <Input id='Email' label='Email' type='email' margin={'none'} />
              <Input id='Password' label='Password' type='password' margin={'none'} />
            </Stack>

            <CtaStack>
              <ForgottenPassword href={'#'}>Forgotten password?</ForgottenPassword>

              <Email type='submit' fullHeight={false} fullWidth variant={'contained'} component='button'>
                Sign in
              </Email>

              <Google fullHeight={false} fullWidth variant={'contained'} component='button' startIcon={<GoogleIcon />}>
                Sign in with google
              </Google>

              <Typography variant='textNormal'>
                Don’t have an account? <SignUpLink href={'#'}>Sign Up</SignUpLink>
              </Typography>
            </CtaStack>
          </FormControl>
        </Wrapper>
      </StyledSignIn>
    </Container>
  );
};

export default SignIn;
