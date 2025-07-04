import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { theme } from '../../../styles/theme/muiTheme';
import Mobile from '../../../components/Pages/Settings/Subscriptions/Mobile';
import Desktop from '../../../components/Pages/Settings/Subscriptions/Desktop';
import { useSession } from 'next-auth/react';
import { IModalForm, IAddExpenseForm } from '@/model/IModalForm';
import { IAddExpenseModalFormYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { purposeList } from '@/model/IPurpose';
import { categoryList } from '@/model/ICategory';
import { statusList } from '@/model/IStatus';
import { createOrUpdateSubscriptions } from '@/utils/functions/createOrUpdateSubscriptions';
import { IExpenses } from '@/model/IExpenses';
import { db } from '@/utils/firebase/clientApp';
import { convertToTimestamp } from '@/utils/functions/convertToTimestamp';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { SEO } from '../../../components/SEO';

const Subscriptions = () => {
  const { data: session } = useSession();
  const userId = session?.userId;

  const [open, setOpen] = useState(false);

  // Fetch expense data
  const [expensesSnapshot] = useDocument(
    doc(db, 'subscriptions', `${session?.userId}`)
  );
  const subscriptions: IExpenses = expensesSnapshot?.data()?.subscriptions
    ? [...(expensesSnapshot.data()?.subscriptions || [])].sort(
        (a, b) =>
          convertToTimestamp(b.createdAt) - convertToTimestamp(a.createdAt)
      )
    : [];

  const expensesTotal = subscriptions.reduce(
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
        createOrUpdateSubscriptions(data, userId);
        handleClose();
      } else {
        return;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting Expense data:', error);
    }
  };

  console.log('subscriptions', subscriptions);
  console.log('expensesTotal', expensesTotal);
  return (
    <>
      <SEO
        title='Subscriptions - Preallo'
        description='Track and manage your monthly subscriptions with Preallo. Monitor recurring payments, categorize expenses, and optimize your subscription spending.'
        canonical='/settings/subscriptions'
        noIndex={true}
      />

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
          subscriptions={subscriptions}
          expensesTotal={expensesTotal}
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
          subscriptions={subscriptions}
          expensesTotal={expensesTotal}
          handleSubmit={handleSubmit}
          submitFormContentHandler={submitFormContentHandler}
          errors={errors}
        />
      )}
    </>
  );
};

export default Subscriptions;
