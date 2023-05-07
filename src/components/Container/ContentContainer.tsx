import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '>:first-child': {
    marginBottom: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const ContentContainer = ({ children }: IChildren) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default ContentContainer;
