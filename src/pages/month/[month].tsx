import Head from 'next/head';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase/clientApp';
import { IMonths } from '../../model/IMonth';
import AppContainer from '../../components/Container/AppContainer';
import Mobile from '../../components/Pages/Month/Mobile';
import Desktop from '../../components/Pages/Month/Desktop';
import { theme } from '../../styles/theme/muiTheme';
import { useMediaQuery } from '@mui/material';
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next/types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IAddExpenseForm } from '@/model/IModalForm';
import { IAddExpenseModalFormYupSchema } from '@/model/IYupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { categoryList } from '@/utils/Variables/categoryList';
import { priorityList } from '@/utils/Variables/priorityList';
import { createOrUpdateExpense } from '@/utils/functions/createOrUpdateExpense';

type IMonthProps = {
  months: IMonths;
};

const Month = (props: IMonthProps) => {
  const { months } = props;
  const router = useRouter();
  const slug = router.query.month?.toString();
  const { data: session } = useSession();
  const month = months?.find((month) => month.slug === slug);
  const userId = session?.userId;
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddExpenseForm>({
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
    if (data && userId && month) {
      createOrUpdateExpense(data, userId, month);
      handleClose();
    }
    if (!data && !userId) {
      throw new Error('Something went wrong, when submitting user data to db');
    }
  };

  // Render nothing if month is undefined
  if (!month) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{month?.month}</title>
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
            priorityList={priorityList}
            handleSubmit={handleSubmit}
            submitFormContentHandler={submitFormContentHandler}
            errors={errors}
            {...month}
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
            priorityList={priorityList}
            handleSubmit={handleSubmit}
            submitFormContentHandler={submitFormContentHandler}
            errors={errors}
            {...month}
          />
        )}
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
