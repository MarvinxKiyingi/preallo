import React from 'react';
import AppContainer from '../../Container/AppContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Typography, styled } from '@mui/material';

import { useAuth } from '../../../utils/context/AuthContext';
import { Button } from '../../Button/Button';
import { Avatar } from '../../Avatar/Avatar';
import { ProfileCard } from '../../ProfileCard/ProfileCard';

const Content = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'repeat(2,1fr)',
  // gap: theme.spacing(4),
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

const CardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  padding: theme.spacing(3, 0),
  height: '80%',
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

            <CardsContainer>
              <ProfileCard title='Subscriptions' />
              <ProfileCard title='Recurring expenses' />
            </CardsContainer>
          </Content>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
