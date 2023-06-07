import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../../Avatar/Avatar';
import { DashboardButton } from '../../DashboardButton/DashboardButton';
import { IIconButtonProps } from '../../IconButton/IconButton';
import { ProfileButton } from '../../ProfileButton/ProfileButton';
import { useAuth } from '../../../utils/context/AuthContext';

export interface IMobileNavigation extends IIconButtonProps {
  title?: string;
  /** If true, hides dashboard icon button */
  hideDashBoard?: boolean;
  /** If true, hides profile icon button */
  hideProfile?: boolean;
}

const MobileNavigationContainer = styled(Box)(({ theme }) => ({
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
    [theme.breakpoints.up('lg')]: {
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
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
    },
  },
}));

export const MobileNavigation = ({
  title,
  hideDashBoard = false,
  hideProfile = false,
  ...props
}: IMobileNavigation & IAvatar) => {
  const { signOutUser } = useAuth();
  return (
    <MobileNavigationContainer className='MobileNavigationContainer'>
      <div className='dashBoardIconContainer'>
        {!hideDashBoard && <DashboardButton {...props} />}
      </div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        {!hideProfile && <ProfileButton onClick={signOutUser} {...props} />}
      </div>
    </MobileNavigationContainer>
  );
};
