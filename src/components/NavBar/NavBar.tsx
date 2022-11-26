import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../Avatar/Avatar';
import { DashboardButton } from '../DashboardButton/DashboardButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';

interface INavBar extends IIconButtonProps {
  title?: string;
  useName?: string;
  dashBoardIsVisible?: boolean;
  profileIsVisible?: boolean;
}

const NavbarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  '&>*': {
    flex: 1,
  },
  '.dashBoardIconContainer': {
    display: 'flex',
    height: 'fit-content',
    alignSelf: 'center',
  },
  '.titleContainer': {
    textAlign: 'center',
    alignSelf: 'center',
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h4,
    },
  },
  '.profileContainer': {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: 'fit-content',
    alignSelf: 'center',
    '&-title': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(2),
      '&-title': {
        display: 'initial',
        ...theme.typography.textLarge,
      },
    },
  },
}));

export const NavBar = ({ title, useName, dashBoardIsVisible, profileIsVisible, ...props }: INavBar & IAvatar) => {
  return (
    <NavbarContainer className='navBar-container'>
      <div className='dashBoardIconContainer'>{dashBoardIsVisible && <DashboardButton {...props} />}</div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        <Typography className='profileContainer-title'>{useName}</Typography>
        <div>{profileIsVisible && <ProfileButton {...props} />}</div>
      </div>
    </NavbarContainer>
  );
};
