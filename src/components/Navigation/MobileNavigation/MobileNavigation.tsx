import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IAvatar } from '../../Avatar/Avatar';
import { DashboardButton } from '../../DashboardButton/DashboardButton';
import { IIconButtonProps } from '../../IconButton/IconButton';
import { ProfileButton } from '../../ProfileButton/ProfileButton';
import Link from 'next/link';
import { theme } from '../../../styles/theme/muiTheme';
import SettingsIcon from '@/components/Icons/SettingsIcon';
import { SettingsButton } from '@/components/SettingsButton/SettingsButton';
import { usePathname } from 'next/navigation';
import SignOutIcon from '@/components/Icons/SignOutIcon';
import { SignOutButton } from '@/components/SignOutButton/SignOutButton';

export type IMobileNavigation = IIconButtonProps & {
  title?: string;
  /** If true, hides dashboard icon button */
  hideDashBoard?: boolean;
  /** If true, hides profile icon button */
  hideProfile?: boolean;
  /** when true, the colors will change to better suit the dark background */
  isDarkBg?: boolean;
  /** If true, shows the sign out button */
  showSignOutButton?: boolean;
};

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
  isDarkBg = false,
  showSignOutButton = false,
  ...props
}: IMobileNavigation & IAvatar) => {
  const pathname = usePathname();
  const Icon = pathname.includes('/settings') ? (
    <SignOutButton />
  ) : (
    <SettingsButton sx={isDarkBg ? { color: 'inherit' } : {}} />
  );

  return (
    <MobileNavigationContainer
      className='MobileNavigationContainer'
      sx={isDarkBg ? { color: theme.palette.common.white } : {}}
    >
      <div className='dashBoardIconContainer'>
        {!hideDashBoard && (
          <DashboardButton
            {...props}
            LinkComponent={Link}
            href='/'
            sx={isDarkBg ? { color: 'inherit' } : {}}
          />
        )}
      </div>

      <Typography className='titleContainer' variant='h6'>
        {title}
      </Typography>

      <div className='profileContainer'>
        {/* {!hideProfile && <ProfileButton {...props} />} */}
        {true && Icon}
      </div>
    </MobileNavigationContainer>
  );
};
