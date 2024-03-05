import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';
import MobileWrapper from './MobileWrapper';
import { IMobileContainerProps } from '@/model/IMobileContainerProps';

const StyledMobileContainer = styled('div')<{
  ownerState: IMobileContainerProps;
}>(({ ownerState, theme }) => ({
  paddingTop: ownerState.disableTopPadding
    ? theme.spacing(0)
    : theme.spacing(3),
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
    paddingTop: ownerState.disableTopPadding
      ? theme.spacing(0)
      : theme.spacing(3),
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

const MobileContainer = ({
  children,
  disableTopPadding = false,
}: IMobileContainerProps & IChildren) => {
  const ownerState = {
    disableTopPadding,
  };
  return (
    <MobileWrapper>
      <StyledMobileContainer ownerState={ownerState}>
        {children}
      </StyledMobileContainer>
    </MobileWrapper>
  );
};

export default MobileContainer;
