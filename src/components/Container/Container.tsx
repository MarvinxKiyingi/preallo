import { Box, styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '87.5rem',
  padding: theme.spacing(0, 3),

  [theme.breakpoints.up('md')]: {
    padding: 'unset',
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
