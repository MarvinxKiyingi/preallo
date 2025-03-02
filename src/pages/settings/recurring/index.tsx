import React, { useState } from 'react';
import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../../styles/theme/muiTheme';
import Mobile from '../../../components/Pages/Settings/Recurring/Mobile';
import Desktop from '../../../components/Pages/Settings/Recurring/Desktop';
import { useSession } from 'next-auth/react';
import { IModalForm, IAddExpenseForm } from '@/model/IModalForm';
import { IAddExpenseModalFormYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { purposeList } from '@/model/IPurpose';
import { categoryList } from '@/model/ICategory';
import { statusList } from '@/model/IStatus';
import { IExpenses } from '@/model/IExpenses';
import { db } from '@/utils/firebase/clientApp';
import { convertToTimestamp } from '@/utils/functions/convertToTimestamp';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { createOrUpdateRecurring } from '@/utils/functions/createOrUpdateRecurring';
const Recurring = () => {
  const { data: session } = useSession();
  const userId = session?.userId;

  const [open, setOpen] = useState(false);

  // Fetch expense data
  const [recurringExpensesSnapshot] = useDocument(
    doc(db, 'recurring', `${session?.userId}`)
  );
  const recurring: IExpenses = recurringExpensesSnapshot?.data()?.subscriptions
    ? [...(recurringExpensesSnapshot.data()?.subscriptions || [])].sort(
        (a, b) =>
          convertToTimestamp(b.createdAt) - convertToTimestamp(a.createdAt)
      )
    : [];

  const recurringExpensesTotal = recurring.reduce(
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
    try {
      if (data && userId) {
        createOrUpdateRecurring(data, userId);
        handleClose();
      } else {
        return;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting Expense data:', error);
    }
  };

  console.log('recurring', recurring);
  console.log('expensesTotal', recurringExpensesTotal);
  return (
    <>
      <Head>
        <title>Recurring</title>
      </Head>

      {!isDesktop && (
        <Mobile
          session={session}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          register={register}
          categoryList={categoryList}
          purposeList={purposeList}
          statusList={statusList}
          recurringExpenses={recurring}
          expensesTotal={recurringExpensesTotal}
          handleSubmit={handleSubmit}
          submitFormContentHandler={submitFormContentHandler}
          errors={errors}
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
          statusList={statusList}
          recurringExpenses={recurring}
          expensesTotal={recurringExpensesTotal}
          handleSubmit={handleSubmit}
          submitFormContentHandler={submitFormContentHandler}
          errors={errors}
        />
      )}
    </>
  );
};

export default Recurring;
