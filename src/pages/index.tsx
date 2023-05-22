import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuth } from '../utils/context/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { theme } from '../styles/theme/muiTheme';
import { styled } from '@mui/material';
import AppContainer from '../components/Container/AppContainer';
import { MobileNavigation } from '../components/Navigation/MobileNavigation/MobileNavigation';
import { Select } from '../components/Select/Select';

const MobileContainer = styled('div')(({ theme }) => ({
  '>+*+': {},
}));

const Home: NextPage = () => {
  const { signOutUser, currentUser } = useAuth();

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <AppContainer>
        {!isDesktop && (
          <MobileContainer>
            <MobileNavigation
              title='Dashboard'
              src={currentUser?.photoURL ? currentUser.photoURL : undefined}
            />
          </MobileContainer>
        )}
      </AppContainer>
    </>
  );
};

export default Home;
