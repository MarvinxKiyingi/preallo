import React from 'react';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import Mobile from '../../components/Pages/Profile/Mobile';
import Desktop from '../../components/Pages/Profile/Desktop';

const Profile = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      {!isDesktop && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Profile;
