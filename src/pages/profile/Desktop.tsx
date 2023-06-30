import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../components/Container/ContentContainer';
import { useRouter } from 'next/router';

const Desktop = () => {
  const router = useRouter();
  const currentPageRouteName = router.pathname.replace(/\//g, '');
  return (
    <AppContainer>
      <>
        <DesktopNavigation disableHighlight={currentPageRouteName} />
        <ContentContainer>
          <div className='emptySpace' />
          <div>Hello</div>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
