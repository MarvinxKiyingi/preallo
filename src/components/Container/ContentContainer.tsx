import { styled, BoxProps } from '@mui/material';
import { IChildren } from '../../model/IChildren';

const StyledContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  '.pageTitle': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 39,
    height: '100%',
    ...theme.typography.h6,
  },

  '&>.desktopNavLogo,.pageTitle': {
    marginBottom: theme.spacing(4),
  },

  gap: theme.spacing(3),
}));

const ContentContainer = ({ children, sx }: IChildren & BoxProps) => {
  return <StyledContentContainer sx={sx}>{children}</StyledContentContainer>;
};

export default ContentContainer;
