import { styled, useMediaQuery } from '@mui/material';
import { IChildren } from '../../model/IChildren';
import Background from './Background';
import { theme } from '../../styles/theme/muiTheme';
import MobileContainer from './MobileConatiner';
import DesktopContainer from './DesktopConatiner';

interface IAppContainer extends IChildren {
  /** Add css string to adjust the gird template column*/
  desktopColumns?: string;
}

const StyledAppContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: theme.breakpoints.values.xl,
  flex: 1,

  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(3),
  },
  [theme.breakpoints.up('xl')]: {
    width: '-webkit-fill-available',
    alignSelf: 'center',
  },
}));

const AppContainer = ({ children, desktopColumns }: IAppContainer) => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  return (
    <Background>
      <StyledAppContainer>
        {!isDesktop && <MobileContainer>{children}</MobileContainer>}
        {isDesktop && (
          <DesktopContainer desktopColumns={desktopColumns}>
            {children}
          </DesktopContainer>
        )}
      </StyledAppContainer>
    </Background>
  );
};

export default AppContainer;
