import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledMobileContainer = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(3),
  '>*': {
    padding: theme.spacing(0, 3),
  },
  '>*+*': {
    marginTop: theme.spacing(3),
  },
  '>:last-child': {
    paddingBottom: theme.spacing(2),
  },

  display: 'flex',
  flexDirection: 'column',
  height: '100vh',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    '>*': {
      padding: theme.spacing(0, 6),
    },
    '>*+*': {
      marginTop: theme.spacing(3),
    },
    [`${theme.breakpoints.between(0, 'md')} and (orientation: landscape)`]: {
      height: 'unset',
    },
  },
}));

const MobileContainer = ({ children }: IChildren) => {
  return <StyledMobileContainer>{children}</StyledMobileContainer>;
};

export default MobileContainer;
