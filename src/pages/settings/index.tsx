import React from 'react';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../styles/theme/muiTheme';
import Mobile from '../../components/Pages/Settings/Mobile';
import Desktop from '../../components/Pages/Settings/Desktop';

const Settings = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      {!isDesktop && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Settings;
