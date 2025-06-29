import React from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../../styles/theme/muiTheme';
import Mobile from '../../../components/Pages/Settings/Goal/Mobile';
import Desktop from '../../../components/Pages/Settings/Goal/Desktop';
import { SEO } from '../../../components/SEO';

const Goal = () => {
  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <SEO
        title='Goal Settings - Preallo'
        description='Configure your financial goals and budget percentages with Preallo. Set up your Need/Want/Save methodology and track your progress towards financial success.'
        noIndex={true}
        canonical='/settings/goal'
      />

      {!isDesktop && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Goal;
