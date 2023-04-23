import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../Avatar/Avatar';
import { DashboardButton } from '../DashboardButton/DashboardButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';

export interface IAppBar extends IIconButtonProps {
  title?: string;
  hideDashBoard?: boolean;
  hideProfile?: boolean;
}

const AppBarContainer = styled(Box)(({ theme }) => ({
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

export const AppBar = ({
  title,
  hideDashBoard,
  hideProfile,
  ...props
}: IAppBar & IAvatar) => {
  return (
    <AppBarContainer className='AppBarContainer'>
      <div className='dashBoardIconContainer'>
        {!hideDashBoard && <DashboardButton {...props} />}
      </div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        <>{!hideProfile && <ProfileButton {...props} />}</>
      </div>
    </AppBarContainer>
  );
};
