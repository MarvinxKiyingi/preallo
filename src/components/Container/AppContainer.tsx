import { styled, useMediaQuery } from '@mui/material';
import { IChildren } from '../../model/IChildren';
import Background from './Background';
import { theme } from '../../styles/theme/muiTheme';
import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';
import { IMobileContainerProps } from '@/model/IMobileContainerProps';

const StyledAppContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1920,
  flex: 1,

  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(3),
    display: 'grid',
  },

  [theme.breakpoints.up('lg')]: {
    margin: theme.spacing(5),
  },

  [theme.breakpoints.up('xl')]: {
    width: '-webkit-fill-available',
    alignSelf: 'center',
  },
}));

const AppContainer = ({
  children,
  disableTopPadding = false,
}: IChildren & IMobileContainerProps) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  return (
    <Background>
      <StyledAppContainer>
        {!isDesktop && (
          <MobileContainer disableTopPadding={disableTopPadding}>
            {children}
          </MobileContainer>
        )}
        {isDesktop && <DesktopContainer>{children}</DesktopContainer>}
      </StyledAppContainer>
    </Background>
  );
};

export default AppContainer;
