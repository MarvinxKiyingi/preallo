import React from 'react';
import AppContainer from '../../components/Container/AppContainer';
import { MobileNavigation } from '../../components/Navigation/MobileNavigation/MobileNavigation';
import { useAuth } from '../../utils/context/AuthContext';
import { Typography, styled, useMediaQuery } from '@mui/material';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';

const ProfileContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  aspectRatio: '1/1',
  width: '28%',
}));

const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(),

  '.userName': {
    fontWeight: 600,
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
}));

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.accent,

  '.title': {
    fontWeight: 600,
  },
  '.description': {},
}));
const ButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const Mobile = () => {
  const { currentUser, signOutUser } = useAuth();

  return (
    <AppContainer>
      <MobileNavigation
        hideProfile
        title='Profile'
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
      />

      <ProfileContainer>
        <StyledAvatar
          avatarMobileSize='auto'
          src={currentUser?.photoURL ? currentUser.photoURL : undefined}
        />

        <TextContainer>
          <Typography className='userName' variant='h6'>
            {currentUser?.displayName}
          </Typography>
          <Edit>{'Edit'}</Edit>
        </TextContainer>
      </ProfileContainer>

      <CardsContainer>
        <Card>
          <Typography className='title' variant='body1'>
            Subscriptions
          </Typography>
          <Typography className='description' variant='caption'>
            Once added here, the total amount will be subtracted from your
            remaining budget.
          </Typography>
          <Button variant='contained'>Edit</Button>
        </Card>

        <Card>
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
        </Card>
      </CardsContainer>

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
    </AppContainer>
  );
};

export default Mobile;
