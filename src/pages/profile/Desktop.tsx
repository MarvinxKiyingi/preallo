import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../components/Container/ContentContainer';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const ProfileWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'repeat(2,1fr)',
}));

const Desktop = () => {
  const router = useRouter();
  const currentPageRouteName = router.pathname.replace(/\//g, '');
  return (
    <AppContainer>
      <>
        <DesktopNavigation disableHighlight={currentPageRouteName} />
        <ContentContainer>
          <Typography className='title' variant='h4' align='center'>
            Profile
          </Typography>
          <ProfileWrapper>
            <div>Hello</div>
            <div>Hello</div>
          </ProfileWrapper>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
