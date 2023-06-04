import { styled } from '@mui/material';
import { Logo } from '../../Logo/Logo';
import { DashboardIcon, RepeatIcon, SubscriptionsIcon } from '../../Icons';
import { Button } from '../../Button/Button';
import Link from 'next/link';
import { Avatar } from '../../Avatar/Avatar';
import { useAuth } from '../../../utils/context/AuthContext';
import ContentContainer from '../../Container/ContentContainer';
import { useEffect } from 'react';

const NavContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const NavItems = styled('nav')(({ theme }) => ({}));

const NavMenu = styled('menu')(({ theme }) => ({
  padding: 'unset',
  margin: 'unset',

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const NavItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',

  '>button': {
    ...theme.typography.subtitle1,
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    fontWeight: 600,
    lineHeight: '120%',
    fontStyle: 'normal',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.subtitle1,
  justifyContent: 'flex-start',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  fontWeight: 600,
  lineHeight: '120%',
  fontStyle: 'normal',
  textTransform: 'capitalize',
  backgroundColor: 'transparent',
  color: theme.palette.common.black,

  ':hover,:active': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
  },

  '.navItemIsActive': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
  },
}));

const ProfileContainer = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle1,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  textDecoration: 'none',
  fontWeight: 600,
  lineHeight: '120%',
  fontStyle: 'normal',
  color: theme.palette.common.black,
  textTransform: 'capitalize',
}));

const DesktopNavigation = () => {
  const { currentUser, signOutUser } = useAuth();

  return (
    <ContentContainer>
      <Logo />
      <NavContainer>
        <NavItems>
          <NavMenu>
            <NavItem>
              <StyledButton fullWidth color='inherit'>
                <DashboardIcon />
                Dashboard
              </StyledButton>
            </NavItem>

            <NavItem>
              <StyledButton fullWidth color='inherit'>
                <SubscriptionsIcon />
                Subscriptions
              </StyledButton>
            </NavItem>

            <NavItem>
              <StyledButton fullWidth color='inherit'>
                <RepeatIcon />
                Recurring
              </StyledButton>
            </NavItem>
          </NavMenu>
        </NavItems>

        <ProfileContainer href='' onClick={() => signOutUser()}>
          <Avatar
            src={currentUser?.photoURL ? currentUser.photoURL : undefined}
          />
          {currentUser?.displayName ? currentUser.displayName : 'My account'}
        </ProfileContainer>
      </NavContainer>
    </ContentContainer>
  );
};

export default DesktopNavigation;
