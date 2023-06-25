import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import { MobileNavigation } from '../../components/Navigation/MobileNavigation/MobileNavigation';
import { useAuth } from '../../utils/context/AuthContext';
import { Typography, styled, useMediaQuery } from '@mui/material';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { theme } from '../../styles/theme/muiTheme';

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

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  aspectRatio: '1/1',
  width: '28%',

  [theme.breakpoints.up('sm')]: {
    width: '59%',
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
      ...theme.typography.h4,
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
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.accent,
  borderRadius: theme.spacing(2),
}));

const CardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  flex: 1,
  maxWidth: 455,

  '.title': {
    fontWeight: 600,
  },
  '.description': {},
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
  const { currentUser, signOutUser } = useAuth();

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
          <StyledAvatar
            avatarMobileSize='auto'
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
              onClick={() => signOutUser()}
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
        <Card>
          <CardContent>
            <Typography className='title' variant='body1'>
              Subscriptions
            </Typography>
            <Typography className='description' variant='caption'>
              Once added here, the total amount will be subtracted from your
              remaining budget.
            </Typography>
            <Button sx={{ maxHeight: 48 }} variant='contained'>
              Edit
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography className='title' variant='body1'>
              Recurring expenses
            </Typography>
            <Typography className='description' variant='caption'>
              Once added here, the total amount will be subtracted from your
              remaining budget.
            </Typography>
            <Button sx={{ maxHeight: 48 }} variant='contained'>
              Edit
            </Button>
          </CardContent>
        </Card>
      </CardsContainer>

      {!isIpad && (
        <ButtonGroup>
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
      )}
    </AppContainer>
  );
};

export default Mobile;
