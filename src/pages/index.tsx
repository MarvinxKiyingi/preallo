import type { NextPage } from 'next';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import { theme } from '../styles/theme/muiTheme';
import { styled } from '@mui/material';
import AppContainer from '../components/Container/AppContainer';
import { Select } from '../components/Select/Select';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../utils/firebase/clientApp';
import { currentYear } from '../utils/functions/currentYear';
import { useState } from 'react';
import { monthList } from '../utils/Variables/monthList';
import { IAddMonthForm } from '../model/IModalForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAddMonthYupSchema } from '../model/IYupSchema';
import { IMonth, IMonths } from '../model/IMonth';
import Mobile from '../components/Pages/Dashboard/Mobile';
import Desktop from '../components/Pages/Dashboard/Desktop';
import { useSession } from 'next-auth/react';
import { createOrUpdateMonth } from '../utils/functions/createOrUpdateMonth';

export const StyledSelect = styled(Select)(({ theme }) => ({
  minHeight: 44,

  [theme.breakpoints.up('md')]: {
    minHeight: 56,
  },
}));

export const Grid = styled('div')<{
  ownerState: { months: IMonths };
}>(({ theme, ownerState }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridAutoRows: ownerState.months.length > 2 ? '1fr' : 'max-content',
  gap: theme.spacing(2),
  height: '100%',
  overflow: 'auto',

  [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
    overflow: 'unset',
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'repeat(4,1fr)',
  },
}));

export const NoContentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [yearsSnapshot] = useDocument(doc(db, 'years', `${session?.userId}`));
  const [monthsSnapshot] = useDocument(doc(db, 'months', `${session?.userId}`));
  const yearList: [string] = yearsSnapshot?.data()?.yearList;
  const months: IMonths = monthsSnapshot
    ?.data()
    ?.months?.sort((a: IMonth, b: IMonth) => {
      return monthList.indexOf(a.month) - monthList.indexOf(b.month);
    });

  const userId = session?.userId;
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddMonthForm>({
    resolver: yupResolver(IAddMonthYupSchema),
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const submitFormContentHandler: SubmitHandler<IAddMonthForm> = (
    data: IAddMonthForm
  ) => {
    if (data && userId) {
      createOrUpdateMonth(data, userId);
      handleClose();
    }
    if (!data && !userId) {
      throw new Error('Something went wrong, when submitting user data to db');
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <AppContainer>
        {!isDesktop && session && (
          <Mobile
            session={session}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleSubmit={handleSubmit}
            currentYear={currentYear}
            monthList={monthList}
            months={months}
            open={open}
            yearList={yearList}
            submitFormContentHandler={submitFormContentHandler}
            register={register}
            errors={errors}
          />
        )}

        {isDesktop && session && (
          <Desktop
            session={session}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleSubmit={handleSubmit}
            currentYear={currentYear}
            monthList={monthList}
            months={months}
            open={open}
            yearList={yearList}
            submitFormContentHandler={submitFormContentHandler}
            register={register}
            errors={errors}
          />
        )}
      </AppContainer>
    </>
  );
};

export default Home;
