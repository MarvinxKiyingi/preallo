import React from 'react';
import AppContainer from '../../Container/AppContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Typography, styled, useMediaQuery } from '@mui/material';

import { useAuth } from '../../../utils/context/AuthContext';
import { Button } from '../../Button/Button';
import { Avatar } from '../../Avatar/Avatar';
import { ProfileCard } from '../../ProfileCard/ProfileCard';
import { theme } from '../../../styles/theme/muiTheme';
import RightGridContentContainer from '../../Container/RightGridContentContainer';

const ProfileContainer = styled('div')(({ theme }) => ({
  gap: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gridColumn: '1/5',
  gridRow: '1/6',
}));

const ProfileTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: 600,
}));

const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(3),
  gridColumn: '5/-1',
  gridRow: '1/6',
}));

const Desktop = () => {
  const { currentUser, signOutUser } = useAuth();
  const router = useRouter();
  const currentPageRouteName = router.pathname.replace(/\//g, '');

  const isIpad = useMediaQuery(
    `${theme.breakpoints.down('md').replace('@media ', '')}`
  );
  return (
    <AppContainer>
      <>
        <DesktopNavigation disableHighlight={currentPageRouteName} />
        <ContentContainer>
          <Typography className='pageTitle'>Profile</Typography>

          <RightGridContentContainer>
            <ProfileContainer>
              <Avatar
                avatarDeskSize='40%'
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

              <Button sx={{ maxHeight: 48 }} variant='contained' color='error'>
                Remove account
              </Button>
            </ButtonGroup>

            <ProfileCard
              title='Subscriptions'
              sx={{
                gridColumn: '1 / -5',
                gridRow: isIpad ? '6/-1' : '6 / -3',
              }}
            />
            <ProfileCard
              title='Recurring expenses'
              sx={{
                gridColumn: '5 / -1',
                gridRow: isIpad ? '6/-1' : '6 / -3',
              }}
            />
          </RightGridContentContainer>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
