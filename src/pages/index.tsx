import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuth } from '../utils/context/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { theme } from '../styles/theme/muiTheme';
import { styled } from '@mui/material';
import AppContainer from '../components/Container/AppContainer';
import { MobileNavigation } from '../components/Navigation/MobileNavigation/MobileNavigation';
import { Select } from '../components/Select/Select';
import { AddRow } from '../components/AddRow/AddRow';
import { Button } from '../components/Button/Button';

const StyledSelect = styled(Select)(({ theme }) => ({
  height: 44,
}));

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: '1fr',
  gap: theme.spacing(2),
  overflow: 'auto',
}));

const Home: NextPage = () => {
  const { signOutUser, currentUser } = useAuth();

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const monthList = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'july',
    'aug',
    'sep',
  ];

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <AppContainer>
        {!isDesktop && (
          <>
            <MobileNavigation
              title='Dashboard'
              src={currentUser?.photoURL ? currentUser.photoURL : undefined}
            />

            <div>
              <StyledSelect
                boxShadow
                fullWidth
                hasBorder={false}
                defaultValue='2022'
                textAlign='center'
                list={['2022', '2023', '2024']}
              />
            </div>

            <AddRow addIsVisible version='secondary' title='Add' />

            {!monthList && <div>Press the add button to get started</div>}

            {monthList && (
              <Grid>
                {monthList.map((item, indx) => (
                  <Button
                    key={indx}
                    fullWidth
                    color='primary'
                    onClick={() => {}}
                    variant='contained'
                    version='monthPicker'
                  >
                    {item}
                  </Button>
                ))}
              </Grid>
            )}
          </>
        )}
      </AppContainer>
    </>
  );
};

export default Home;
