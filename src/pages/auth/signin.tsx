import { Box, styled } from '@mui/material';
import React from 'react';
import Container from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';

const StyledSignIn = styled(Box)(({ theme }) => ({}));
const SignIn = () => {
  return (
    <Container>
      <StyledSignIn>
        <Logo />
      </StyledSignIn>
    </Container>
  );
};

export default SignIn;
