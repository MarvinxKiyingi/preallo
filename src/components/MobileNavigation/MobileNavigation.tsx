import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../Avatar/Avatar';
import { DashboardButton } from '../DashboardButton/DashboardButton';
import { IIconButtonProps } from '../IconButton/IconButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';

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
  fontSizeMobile = '24px',
  fontSizeDesktop = '32px',
  ...props
}: IMobileNavigation & IAvatar) => {
  return (
    <MobileNavigationContainer className='MobileNavigationContainer'>
      <div className='dashBoardIconContainer'>
        {!hideDashBoard && (
          <DashboardButton
            fontSizeMobile={fontSizeMobile}
            fontSizeDesktop={fontSizeDesktop}
            {...props}
          />
        )}
      </div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        <>
          {!hideProfile && (
            <ProfileButton
              fontSizeMobile={fontSizeMobile}
              fontSizeDesktop={fontSizeDesktop}
              {...props}
            />
          )}
        </>
      </div>
    </MobileNavigationContainer>
  );
};
