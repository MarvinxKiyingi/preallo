import Head from 'next/head';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/clientApp';
import { IMonth } from '../../model/IMonth';
import AppContainer from '../../components/Container/AppContainer';
import Mobile from '../../components/Pages/Month/Mobile';
import Desktop from '../../components/Pages/Month/Desktop';
import { theme } from '../../styles/theme/muiTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { useSession } from 'next-auth/react';

const Month = () => {
  const { data: session } = useSession();
  const [monthsSnapshot] = useDocument(doc(db, 'months', `${session?.userId}`));
  const month: IMonth = monthsSnapshot?.data()?.months?.[0];

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  return (
    <>
      <Head>
        <title>{month?.month}</title>
      </Head>

      {session && (
        <AppContainer>
          {!isDesktop && (
            <Mobile
              session={session}
              month={month?.month}
              year={month?.year}
              salary={month?.salary}
            />
          )}

          {isDesktop && (
            <Desktop
              session={session}
              month={month?.month}
              year={month?.year}
              salary={month?.salary}
            />
          )}
        </AppContainer>
      )}
    </>
  );
};

export default Month;
