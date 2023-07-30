import React from 'react';
import AppContainer from '../../Container/AppContainer';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { useAuth } from '../../../utils/context/AuthContext';
import { Typography, styled, useMediaQuery } from '@mui/material';
import { Avatar } from '../../Avatar/Avatar';
import { Button } from '../../Button/Button';
import { theme } from '../../../styles/theme/muiTheme';
import { ProfileCard } from '../../ProfileCard/ProfileCard';
import { signOut } from 'next-auth/react';

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
    ...theme.typography.h6,
    fontWeight: 600,

    [theme.breakpoints.up('sm')]: {
      ...theme.typography.h5,
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
  const { currentUser } = useAuth();

  const isIpad = useMediaQuery(
    `${theme.breakpoints.up('sm').replace('@media ', '')}`
  );

  return (
    <AppContainer>
      <MobileNavigation
        hideProfile
        title='Profile'
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
      />

      <ProfileWrapper>
        <ProfileContainer>
          <Avatar
            avatarMobileSize='55%'
            src={currentUser?.photoURL ? currentUser.photoURL : undefined}
          />

          <TextContainer>
            <Typography className='userName'>
              {currentUser?.displayName}
            </Typography>
            {!isIpad && <Edit>Edit</Edit>}
          </TextContainer>
        </ProfileContainer>

        {isIpad && (
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
