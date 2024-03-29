import Head from 'next/head';
import { doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/clientApp';
import { IMonths } from '../../model/IMonth';
import AppContainer from '../../components/Container/AppContainer';
import Mobile from '../../components/Pages/Month/Mobile';
import Desktop from '../../components/Pages/Month/Desktop';
import { theme } from '../../styles/theme/muiTheme';
import { useMediaQuery } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IAddExpenseForm, IModalForm } from '@/model/IModalForm';
import { IAddExpenseModalFormYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { categoryList } from '@/model/ICategory';
import { purposeList } from '@/model/IPurpose';
import { createOrUpdateExpense } from '@/utils/functions/createOrUpdateExpense';
import { useDocument } from 'react-firebase-hooks/firestore';
import { IExpenses } from '@/model/IExpenses';

const Month = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const slug = router.query.month?.toString();
  const userId = session?.userId;
  const [open, setOpen] = useState(false);

  // Fetch months data
  const [monthsSnapshot] = useDocument(doc(db, 'months', `${session?.userId}`));
  const months: IMonths = monthsSnapshot?.data()?.months;
  const currentMonth = months?.find((month) => month.slug === slug);

  // Fetch expense data
  const [expensesSnapshot] = useDocument(
    doc(db, 'expenses', `${session?.userId}`)
  );
  const expenses: IExpenses = expensesSnapshot?.data()?.expenses || [];

  const currentMonthExpenses = expenses.filter(
    ({ monthDetails }) =>
      monthDetails.year === currentMonth?.year &&
      monthDetails.monthName === currentMonth?.monthName
  );

  const expensesTotal = currentMonthExpenses.reduce(
    (total, { amount }) => total + amount,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModalForm>({
    resolver: yupResolver(IAddExpenseModalFormYupSchema),
  });

  const isDesktop = useMediaQuery(
    `${theme.breakpoints.up('md').replace('@media ', '')}`
  );

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitFormContentHandler: SubmitHandler<IAddExpenseForm> = (
    data: IAddExpenseForm
  ) => {
    if (data && userId && currentMonth) {
      createOrUpdateExpense(data, userId, currentMonth);
      handleClose();
    }
    if (!data && !userId) {
      throw new Error('Something went wrong, when submitting user data to db');
    }
  };

  // Render nothing if month is undefined
  if (!currentMonth) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentMonth?.monthName}</title>
        <meta name='theme-color' content={theme.palette.primary.main}></meta>
      </Head>

      <AppContainer disableTopPadding={!isDesktop}>
        {!isDesktop && (
          <Mobile
            session={session}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            register={register}
            categoryList={categoryList}
            purposeList={purposeList}
            currentMonthExpenses={currentMonthExpenses}
            expensesTotal={expensesTotal}
            handleSubmit={handleSubmit}
            submitFormContentHandler={submitFormContentHandler}
            errors={errors}
            month={currentMonth}
          />
        )}

        {isDesktop && (
          <Desktop
            session={session}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            register={register}
            categoryList={categoryList}
            purposeList={purposeList}
            currentMonthExpenses={currentMonthExpenses}
            expensesTotal={expensesTotal}
            handleSubmit={handleSubmit}
            submitFormContentHandler={submitFormContentHandler}
            errors={errors}
            month={currentMonth}
          />
        )}
      </AppContainer>
    </>
  );
};

export default Month;
