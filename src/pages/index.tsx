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
import DesktopNavigation from '../components/Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../components/Container/ContentContainer';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../utils/firebase/clientApp';
import { currentYear } from '../utils/functions/currentYear';

const StyledSelect = styled(Select)(({ theme }) => ({
  minHeight: 44,

  [theme.breakpoints.up('md')]: {
    minHeight: 56,
  },
}));

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: '1fr',
  gap: theme.spacing(2),
  height: '100%',
  overflow: 'auto',

  [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
    overflow: 'unset',
  },

  [theme.breakpoints.up('sm')]: {
    gridTemplateRows: 'unset',
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
  },
  [theme.breakpoints.up(1400)]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  },
}));

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  const [years] = useDocument(doc(db, 'Years', `${currentUser?.uid}`));
  const yearList: [string] = years?.data()?.yearList;

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
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
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
              {yearList && (
                <StyledSelect
                  boxShadow
                  fullWidth
                  // hasBorder={false}
                  defaultValue={currentYear}
                  textAlign='center'
                  list={yearList}
                />
              )}
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

        {isDesktop && (
          <>
            <DesktopNavigation />
            <ContentContainer>
              <div aria-hidden='true' />

              <div>
                {yearList && (
                  <StyledSelect
                    boxShadow
                    fullWidth
                    // hasBorder={false}
                    defaultValue={currentYear}
                    textAlign='center'
                    list={yearList}
                  />
                )}
              </div>

              <AddRow addIsVisible version='secondary' title='Add' />

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
            </ContentContainer>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default Home;
