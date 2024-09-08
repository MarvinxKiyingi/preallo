import React from 'react';
import AppContainer from '../../Container/AppContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Box, Typography, styled } from '@mui/material';
import { Button } from '../../Button/Button';
import { Avatar } from '../../Avatar/Avatar';
import RightGridContentContainer from '../../Container/RightGridContentContainer';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { theme } from '@/styles/theme/muiTheme';

const ProfileContainer = styled('div')(({ theme }) => ({
  gap: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));
const RightContent = styled('div')(({ theme }) => ({
  gridColumn: '2/-2',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  justifyContent: 'center',
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
}));

const Desktop = () => {
  const { data: session } = useSession();
  const { user } = session!;
  const router = useRouter();
  const currentPageRouteName = router.pathname.replace(/\//g, '');

  return (
    <AppContainer>
      <>
        <DesktopNavigation disableHighlight={currentPageRouteName} />
        <ContentContainer>
          <div className='titleContainer'>
            <Typography className='pageTitle'>Profile</Typography>
          </div>

          <RightGridContentContainer
            sx={{
              gridTemplateRows: 'unset !important',
              backgroundColor: theme.palette.background.accent,
              borderRadius: theme.spacing(1),
            }}
          >
            <RightContent>
              <ProfileContainer>
                <Avatar
                  avatarDeskSize='40%'
                  src={user?.image ? user.image : undefined}
                />

                <ProfileTitle className='userName' variant='h3'>
                  {user?.name}
                </ProfileTitle>
              </ProfileContainer>

              <ButtonGroup>
                <Button
                  sx={{ maxHeight: 48 }}
                  variant='contained'
                  onClick={() => signOut()}
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
            </RightContent>
          </RightGridContentContainer>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
