import React from 'react';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { theme } from '../../styles/theme/muiTheme';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Profile = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      {!isDesktop && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Profile;
