import { useMediaQuery } from '@mui/material';
import { theme } from '../../../styles/theme/muiTheme';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import AppContainer from '../../Container/AppContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../Container/ContentContainer';

const AppLayout = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <AppContainer>
      {!isDesktop && (
        <>
          <MobileNavigation />
        </>
      )}

      {isDesktop && (
        <>
          <DesktopNavigation />
          <ContentContainer>
            <div aria-hidden='true' />
            <div> </div>
          </ContentContainer>
        </>
      )}
    </AppContainer>
  );
};

export default AppLayout;
