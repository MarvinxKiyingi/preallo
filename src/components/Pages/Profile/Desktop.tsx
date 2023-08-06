import React from 'react';
import AppContainer from '../../Container/AppContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Typography, styled } from '@mui/material';

import { Button } from '../../Button/Button';
import { Avatar } from '../../Avatar/Avatar';
import { ProfileCard } from '../../ProfileCard/ProfileCard';
import { signOut, useSession } from 'next-auth/react';

const Title = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Content = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'grid',
  gridTemplateRows: 'repeat(2,1fr)',
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
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.h6,
    fontWeight: 600,
  },
})) as typeof Typography;

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
  const { data: session } = useSession();
  const imgUrl = session?.user?.image;
  const userName = session?.user?.name;

  const router = useRouter();
  const currentPageRouteName = router.pathname.replace(/\//g, '');

  return (
    <AppContainer>
      <>
        <DesktopNavigation disableHighlight={currentPageRouteName} />
        <ContentContainer>
          <Title className='pageTitle' variant='h5' align='center'>
            Profile
          </Title>

          <Content>
            <ProfileWrapper>
              <ProfileContainer>
                <Avatar
                  avatarDeskSize='45%'
                  src={imgUrl ? imgUrl : undefined}
                />

                <ProfileTitle
                  className='userName'
                  variant='body1'
                  component='h1'
                >
                  {userName}
                </ProfileTitle>
              </ProfileContainer>

              <ButtonGroup>
                {/* <Button
                  sx={{ maxHeight: 48 }}
                  variant='contained'
                  color='secondary'
                >
                  Edit profile
                </Button> */}

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
