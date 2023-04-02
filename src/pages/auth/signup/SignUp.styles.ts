import { Box, Link, Typography, styled } from "@mui/material";
import { Button } from "../../../components/Button/Button";
import { grey } from "../../../styles/colors/grey";

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h1
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
  