import { Box, styled, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '../../../components/Button/Button';

export const LogoWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

export const StyledSignIn = styled(Box)({
  width: '100%',
});

export const Wrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(7, 0, 0, 0),
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
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
  ...theme.typography.textNormalBold,
  textDecoration: 'none',
  display: 'flex',
  alignSelf: 'end',
}));

export const SignUpLink = styled(Link)(({ theme }) => ({
  ...theme.typography.textNormalBold,
}));
