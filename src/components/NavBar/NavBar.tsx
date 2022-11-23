import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../Avatar/Avatar';
import { DashboardButton } from '../DashboardButton/DashboardButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';

type INavBar = {
  title?: string;
  useName?: string;
  dashBoardIsVisible?: boolean;
  profileIsVisible?: boolean;
};

const NavbarContainer = styled(Box)((theme) => ({
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
  },
  '.profileContainer': {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: 'fit-content',
    alignSelf: 'center',
  },
}));

export const NavBar = ({ title, useName, dashBoardIsVisible, profileIsVisible, ...props }: INavBar & IAvatar) => {
  return (
    <NavbarContainer>
      <div className='dashBoardIconContainer'>{dashBoardIsVisible && <DashboardButton />}</div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        <Typography>{useName}</Typography>
        <div>{profileIsVisible && <ProfileButton {...props} />}</div>
      </div>
    </NavbarContainer>
  );
};
