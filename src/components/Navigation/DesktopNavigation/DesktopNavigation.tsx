import { SyntheticEvent, useEffect, useState } from 'react';
import { Tab, Tabs, styled, TabProps } from '@mui/material';
import { Logo } from '../../Logo/Logo';
import { DashboardIcon, RepeatIcon, SubscriptionsIcon } from '../../Icons';
import Link from 'next/link';
import { Avatar } from '../../Avatar/Avatar';
import ContentContainer from '../../Container/ContentContainer';
import { useSession } from 'next-auth/react';

type IStyledTab = TabProps & {
  href?: string;
};

type IDesktopNavigation = {
  disableHighlight?: string;
  monthName?: string;
  monthSlug?: string;
};

const NavContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(2),
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

const DesktopNavigation = ({ disableHighlight }: IDesktopNavigation) => {
  const { data: session } = useSession();
  const [value, setValue] = useState('dashboard');

  const imgUrl = session?.user?.image;
  const userName = session?.user?.name;

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
          value={value}
          onChange={handleChange}
          aria-label='navigation'
          orientation='vertical'
        >
          {/* {month && (
            <StyledTab
              LinkComponent={Link}
              href={`/month/${monthSlug}`}
              value={month.toLowerCase()}
              label={month}
              iconPosition='start'
              icon={<CalendarMonthRoundedIcon />}
            />
          )} */}
          <StyledTab
            LinkComponent={Link}
            href={'/'}
            value='dashboard'
            label='Dashboard'
            iconPosition='start'
            icon={<DashboardIcon />}
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
        </StyledTabs>

        <ProfileContainer href='/profile'>
          <Avatar src={imgUrl ? imgUrl : undefined} />
          {userName ? userName : 'My account'}
        </ProfileContainer>
      </NavContainer>
    </ContentContainer>
  );
};

export default DesktopNavigation;
