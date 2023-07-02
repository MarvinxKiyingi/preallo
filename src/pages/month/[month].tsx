import Head from 'next/head';
import { useAuth } from '../../utils/context/AuthContext';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/clientApp';
import { IMonth } from '../../model/IMonth';
import AppContainer from '../../components/Container/AppContainer';
import Mobile from '../../components/Pages/Month/Mobile';
import Desktop from '../../components/Pages/Month/Desktop';
import { theme } from '../../styles/theme/muiTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

const Month = () => {
  const { currentUser } = useAuth();
  const [monthsSnapshot] = useDocument(
    doc(db, 'Months', `${currentUser?.uid}`)
  );
  const month: IMonth = monthsSnapshot?.data()?.months?.[0];

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  if (!currentUser) return null;

  return (
    <>
      <Head>
        <title>{month?.month}</title>
      </Head>

      <AppContainer>
        {!isDesktop && (
          <Mobile
            currentUser={currentUser}
            month={month?.month}
            year={month?.year}
            salary={month?.salary}
          />
        )}

        {isDesktop && (
          <Desktop
            currentUser={currentUser}
            month={month?.month}
            year={month?.year}
            salary={month?.salary}
          />
        )}
      </AppContainer>
    </>
  );
};

export default Month;
