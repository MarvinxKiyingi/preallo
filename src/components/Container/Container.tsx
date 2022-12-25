import { Box, styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100vh',
  maxWidth: '87.5rem',

  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));
const Container = ({ children }: IChildren) => {
  return (
    <StyledContainer>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  );
};

export default Container;
