import { styled } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '>:first-child': {
    marginBottom: theme.spacing(6),
    minHeight: theme.spacing(6),
  },
  '>*+*': {
    marginTop: theme.spacing(3),
  },
}));

const ContentContainer = ({ children }: IChildren) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default ContentContainer;
