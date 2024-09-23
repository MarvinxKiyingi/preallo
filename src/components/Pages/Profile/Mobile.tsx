import React from 'react';
import AppContainer from '../../Container/AppContainer';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { Typography, styled, useMediaQuery } from '@mui/material';
import { Avatar } from '../../Avatar/Avatar';
import { Button } from '../../Button/Button';
import { theme } from '../../../styles/theme/muiTheme';
import { ProfileCard } from '../../ProfileCard/ProfileCard';
import { signOut, useSession } from 'next-auth/react';

const ProfileWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
}));

const ProfileContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
    padding: theme.spacing(5, 0),
  },
}));

const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(),

  '.userName': {
    fontWeight: 600,

    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h6,
      fontWeight: 600,
    },
  },
}));

const Edit = styled('button')(({ theme }) => ({
  all: 'unset',
  color: theme.palette.secondary.main,
  ...theme.typography.caption,
  fontWeight: 600,
}));

const CardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: '100%',

  '&>*': {
    flex: 1,
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: 'unset',
  },
}));

const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
  },
}));

const Mobile = () => {
  const { data: session } = useSession();
  const imgUrl = session?.user?.image;
  const userName = session?.user?.name;

  const isIpad = useMediaQuery(
    `${theme.breakpoints.up('sm').replace('@media ', '')}`
  );

  return (
    <AppContainer>
      <MobileNavigation
        hideProfile
        title='Profile'
        src={imgUrl ? imgUrl : undefined}
      />

      <ProfileWrapper>
        <ProfileContainer>
          <Avatar avatarMobileSize='45%' src={imgUrl ? imgUrl : undefined} />

          <TextContainer>
            <Typography className='userName' variant='body1' component='h2'>
              {userName}
            </Typography>
          </TextContainer>
        </ProfileContainer>

        {isIpad && (
          <ButtonGroup>
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
        )}
      </ProfileWrapper>

      <CardsContainer>
        <ProfileCard title='Subscriptions' />
        <ProfileCard title='Recurring expenses' />
      </CardsContainer>

      {!isIpad && (
        <ButtonGroup>
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
      )}
    </AppContainer>
  );
};

export default Mobile;
