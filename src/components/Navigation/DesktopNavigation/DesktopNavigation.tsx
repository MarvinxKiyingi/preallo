import { SyntheticEvent, useEffect, useState } from 'react';
import { Tab, Tabs, styled, TabProps, Box, Stack } from '@mui/material';
import { Logo } from '../../Logo/Logo';
import { DashboardIcon, SettingsIcon } from '../../Icons';
import Link from 'next/link';
import { Avatar } from '../../Avatar/Avatar';
import ContentContainer from '../../Container/ContentContainer';
import { useSession } from 'next-auth/react';
import { useDashboardLabel } from '@/utils/functions/useDashboardLabel';
import { SignOutButton } from '@/components/SignOutButton/SignOutButton';
import { IconButton } from '@/components/IconButton/IconButton';
import { Button } from '@/components/Button/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type IStyledTab = TabProps & {
  href?: string;
};

type IDesktopNavigation = {
  disableHighlight?: string;
  highlightedValue?: string;
  slug?: string;
};

const NavContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  height: '100%',

  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(2),
    height: '100%',
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.common.white,
    color: `${theme.palette.secondary.main} !important`,
  },
  '& .MuiButtonBase-root': {
    minHeight: 'unset',
    borderRadius: theme.spacing(),
  },
}));

const StyledTab = styled(Tab)<IStyledTab>(({ theme }) => ({
  ...theme.typography.subtitle1,
  justifyContent: 'flex-start',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  fontWeight: 600,
  lineHeight: '120%',
  fontStyle: 'normal',
  textTransform: 'capitalize',
  color: theme.palette.common.black,
  whiteSpace: 'nowrap',
  '& .MuiSvgIcon-root': {
    marginRight: 'unset',
  },
}));

const ProfileContainer = styled('div')(({ theme }) => ({
  ...theme.typography.subtitle1,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  fontWeight: 600,
  lineHeight: '120%',
  fontStyle: 'normal',
  textTransform: 'capitalize',
  color: theme.palette.common.black,
  whiteSpace: 'nowrap',
  '& .MuiSvgIcon-root': {
    marginRight: 'unset',
  },
}));

const StyledProfileTab = styled(ProfileContainer)(({ theme }) => ({
  padding: theme.spacing(1),
  marginTop: 'auto',
  fontSize: '0.75rem',

  '.profile-tab-content': {
    display: 'flex',
    gap: theme.spacing(2),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.profile-text-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    justifyContent: 'space-between',
  },
}));

const StatusIndicator = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  width: 'fit-content',
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(2),
  padding: theme.spacing('5px', 1),

  '&:hover': {
    backgroundColor: theme.palette.error.main,
  },
}));

const SignOutIconWrapper = styled(SignOutButton)(({ theme }) => ({
  width: 'fit-content',
  height: 'fit-content',
  minWidth: 'unset',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(),
  color: theme.palette.common.black,
}));

const DesktopNavigation = ({
  disableHighlight,
  highlightedValue,
  slug,
}: IDesktopNavigation) => {
  const { data: session } = useSession();
  const [value, setValue] = useState('dashboard');

  const imgUrl = session?.user?.image;
  const userName = session?.user?.name;
  const dashboardLabel = useDashboardLabel(slug);

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (disableHighlight) {
      setValue(disableHighlight);
    }
  }, [disableHighlight]);

  return (
    <ContentContainer>
      <Logo className='desktopNavLogo' />
      <NavContainer>
        <StyledTabs
          value={highlightedValue || value}
          onChange={handleChange}
          aria-label='navigation'
          orientation='vertical'
        >
          <StyledTab
            LinkComponent={Link}
            href={'/'}
            value='dashboard'
            label={dashboardLabel}
            iconPosition='start'
            icon={<DashboardIcon />}
          />
          <StyledTab
            LinkComponent={Link}
            href={'/settings/goal'}
            value='settings'
            label={
              <Stack
                width='100%'
                flexDirection='row'
                justifyContent='space-between'
              >
                <span>Settings</span>
                <InfoOutlinedIcon
                  fontSize='small'
                  sx={{ color: 'rgba(0, 0, 0, 0.60)' }}
                />
              </Stack>
            }
            iconPosition='start'
            icon={<SettingsIcon />}
          />
          {/* <StyledTab
            LinkComponent={Link}
            href={'/subscriptions'}
            value='subscriptions'
            label='Subscriptions'
            iconPosition='start'
            icon={<SubscriptionsIcon />}
          />
          <StyledTab
            LinkComponent={Link}
            href={'/recurring'}
            value='recurring'
            label='Recurring'
            iconPosition='start'
            icon={<RepeatIcon />}
          /> */}
          {/* <StyledProfileTab
            LinkComponent={Link}
            href={'/profile'}
            value={'profile'}
            label={userName ? userName : 'My account'}
            iconPosition='start'
            icon={<Avatar src={imgUrl ? imgUrl : undefined} />}
          /> */}
        </StyledTabs>

        <StyledProfileTab>
          <Avatar src={imgUrl ? imgUrl : undefined} />
          <Box className='profile-tab-content'>
            <Box className='profile-text-wrapper'>
              <Box display='flex' flexWrap='wrap'>
                {userName}
              </Box>
              <StatusIndicator>Sign out</StatusIndicator>
            </Box>
            <SignOutIconWrapper />
          </Box>
        </StyledProfileTab>
      </NavContainer>
    </ContentContainer>
  );
};

export default DesktopNavigation;
