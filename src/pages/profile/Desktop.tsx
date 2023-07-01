import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import DesktopNavigation from '../../components/Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../components/Container/ContentContainer';
import { useRouter } from 'next/router';
import { Typography, styled } from '@mui/material';

import { useAuth } from '../../utils/context/AuthContext';
import { Button } from '../../components/Button/Button';
import { Avatar } from '../../components/Avatar/Avatar';

const Content = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'repeat(2,1fr)',
  gap: theme.spacing(6),
}));

const ProfileWrapper = styled('div')(({ theme }) => ({
  gap: theme.spacing(6),
  padding: theme.spacing(3, 0),
  display: 'flex',

  '>*': {
    flex: 1,
    alignSelf: 'center',
  },
}));

const ProfileContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
}));

const ProfileTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
}));

const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
  },
}));

const Desktop = () => {
  const { currentUser, signOutUser } = useAuth();
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

          <Content>
            <ProfileWrapper>
              <ProfileContainer>
                <Avatar
                  avatarDeskSize='45%'
                  src={currentUser?.photoURL ? currentUser.photoURL : undefined}
                />

                <ProfileTitle className='userName' variant='h3'>
                  {currentUser?.displayName}
                </ProfileTitle>
              </ProfileContainer>

              <ButtonGroup>
                <Button
                  sx={{ maxHeight: 48 }}
                  variant='contained'
                  color='secondary'
                >
                  Edit profile
                </Button>

                <Button
                  sx={{ maxHeight: 48 }}
                  variant='contained'
                  onClick={() => signOutUser()}
                >
                  Sign out
                </Button>

                <Button
                  sx={{ maxHeight: 48 }}
                  variant='contained'
                  color='error'
                >
                  Remove account
                </Button>
              </ButtonGroup>
            </ProfileWrapper>

            <div>Hello</div>
          </Content>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
