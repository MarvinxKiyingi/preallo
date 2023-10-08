import Head from 'next/head';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase/clientApp';
import { IMonths } from '../../model/IMonth';
import AppContainer from '../../components/Container/AppContainer';
import Mobile from '../../components/Pages/Month/Mobile';
import Desktop from '../../components/Pages/Month/Desktop';
import { theme } from '../../styles/theme/muiTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';
import { useRouter } from 'next/router';

type IMonthProps = {
  months: IMonths;
};

const Month = (props: IMonthProps) => {
  const { months } = props;
  const router = useRouter();
  const slug = router.query.month;
  const { data: session } = useSession();
  const month = months?.find((month) => month.slug === slug);

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  return (
    <>
      <Head>
        <title>{month?.month}</title>
      </Head>

      <AppContainer>
        {!isDesktop && <Mobile session={session} {...month} />}

        {isDesktop && <Desktop session={session} {...month} />}
      </AppContainer>
    </>
  );
};

export default Month;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const session = await getSession(context);
    const ref = doc(db, 'months', `${session?.userId}`);

    const querySnapshot = await getDoc(ref);
    const months: IMonths = querySnapshot.data()?.months;

    return {
      props: {
        months: months,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [], // Return an empty array or handle the error as needed
      },
    };
  }
};
