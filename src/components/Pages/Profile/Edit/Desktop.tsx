import React from 'react';
import AppContainer from '../../../Container/AppContainer';
import DesktopNavigation from '../../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Typography, styled, useMediaQuery } from '@mui/material';

import { Button } from '../../../Button/Button';
import { Avatar } from '../../../Avatar/Avatar';
import { ProfileCard } from '../../../ProfileCard/ProfileCard';
import { theme } from '../../../../styles/theme/muiTheme';
import RightGridContentContainer from '../../../Container/RightGridContentContainer';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

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
  const { data: session } = useSession();
  const { user } = session!;
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
          <div className='titleContainer'>
            <Typography className='pageTitle'>Profile</Typography>
          </div>

          <RightGridContentContainer>
            <ProfileContainer>
              <Avatar
                avatarDeskSize='40%'
                src={user?.image ? user.image : undefined}
              />
              <input accept='image/*' id='icon-button-file' type='file' />

              <ProfileTitle className='userName' variant='h3'>
                {user?.name}
              </ProfileTitle>
            </ProfileContainer>

            <ButtonGroup>
              <Button
                sx={{ maxHeight: 48 }}
                variant='contained'
                color='secondary'
              >
                update profile
              </Button>

              <Button
                sx={{ maxHeight: 48 }}
                variant='contained'
                onClick={() => signOut()}
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
