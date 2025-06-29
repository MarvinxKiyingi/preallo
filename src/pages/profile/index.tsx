import React from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import Mobile from '../../components/Pages/Profile/Mobile';
import Desktop from '../../components/Pages/Profile/Desktop';
import { SEO } from '../../components/SEO';

const Profile = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <SEO
        title='Profile - Preallo'
        description='Manage your Preallo profile and account settings. Update your personal information and preferences for your financial management experience.'
        canonical='/profile'
        noIndex={true}
      />

      {!isDesktop && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Profile;
