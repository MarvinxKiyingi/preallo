import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuth } from '../utils/context/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { theme } from '../styles/theme/muiTheme';
import { Dialog, Typography, styled } from '@mui/material';
import AppContainer from '../components/Container/AppContainer';
import { MobileNavigation } from '../components/Navigation/MobileNavigation/MobileNavigation';
import { Select } from '../components/Select/Select';
import { AddRow } from '../components/AddRow/AddRow';
import { Button } from '../components/Button/Button';
import DesktopNavigation from '../components/Navigation/DesktopNavigation/DesktopNavigation';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../utils/firebase/clientApp';
import { currentYear } from '../utils/functions/currentYear';
import { FormContent } from '../components/FormContent/FormContent';
import { useState } from 'react';
import { monthList } from '../utils/Variables/monthList';
import { IModalForm } from '../model/IModalForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISelectModalFormYupSchema } from '../model/IYupSchema';
import { useApp } from '../utils/context/AppContext';
import { IMonth, IMonths } from '../model/IMonth';

const StyledSelect = styled(Select)(({ theme }) => ({
  minHeight: 44,

  [theme.breakpoints.up('md')]: {
    minHeight: 56,
  },
}));

const Grid = styled('div')<{
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
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
  },
}));

const NoContentContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const StyledContentContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateRows: '1.3fr 0.2fr 5fr',
    gap: theme.spacing(3),
  },
  '>:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
}));

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  const { createOrUpdateMonth } = useApp();
  const [yearsSnapshot] = useDocument(doc(db, 'Years', `${currentUser?.uid}`));
  const [monthsSnapshot] = useDocument(
    doc(db, 'Months', `${currentUser?.uid}`)
  );
  const yearList: [string] = yearsSnapshot?.data()?.yearList;
  const months: IMonths = monthsSnapshot
    ?.data()
    ?.months?.sort((a: IMonth, b: IMonth) => {
      return monthList.indexOf(a.month) - monthList.indexOf(b.month);
    });

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModalForm>({
    resolver: yupResolver(ISelectModalFormYupSchema),
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

  const submitFormContentHandler: SubmitHandler<IModalForm> = (
    data: IModalForm
  ) => {
    createOrUpdateMonth(data);
    handleClose();
  };

  const ownerState = {
    months,
  };

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

            <AddRow
              addIsVisible
              version='secondary'
              title='Add'
              onClick={() => handleOpen()}
            />

            <Dialog onClose={() => handleClose()} open={open} maxWidth={'xs'}>
              <form onSubmit={handleSubmit(submitFormContentHandler)}>
                <FormContent
                  add
                  title='Add Month'
                  description='Pick a month to add, you can only add existing and coming months.'
                  variant='select'
                  selectList={monthList}
                  selectLabel='Month'
                  onAgreeLabel='Add'
                  onDisagreeLabel='Cancel'
                  onDisagree={() => handleClose()}
                  onClick={() => handleClose()}
                  register={register}
                  errors={errors}
                />
              </form>
            </Dialog>

            {months?.length > 0 ? (
              <Grid ownerState={ownerState}>
                {months.map((item, indx) => (
                  <Button
                    key={indx}
                    fullWidth
                    color='primary'
                    onClick={() => {}}
                    variant='contained'
                    version='monthPicker'
                  >
                    {item.month}
                  </Button>
                ))}
              </Grid>
            ) : (
              <NoContentContainer>
                <Typography>Press the add button to get started</Typography>
              </NoContentContainer>
            )}
          </>
        )}

        {isDesktop && (
          <>
            <DesktopNavigation />
            <StyledContentContainer>
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

              <AddRow
                addIsVisible
                version='secondary'
                title='Add'
                onClick={handleOpen}
              />

              <Dialog onClose={() => handleClose()} open={open} maxWidth={'xs'}>
                <form onSubmit={handleSubmit(submitFormContentHandler)}>
                  <FormContent
                    add
                    title='Add Month'
                    description='Pick a month to add, you can only add existing and coming months.'
                    variant='select'
                    selectLabel='Month'
                    selectList={monthList}
                    onAgreeLabel='Add'
                    onDisagreeLabel='Cancel'
                    onDisagree={() => handleClose()}
                    onClick={() => handleClose()}
                    register={register}
                    errors={errors}
                  />
                </form>
              </Dialog>

              {months?.length > 0 ? (
                <Grid ownerState={ownerState}>
                  {months.map((item, indx) => (
                    <Button
                      key={indx}
                      fullWidth
                      color='primary'
                      onClick={() => {}}
                      variant='contained'
                      version='monthPicker'
                    >
                      {item.month}
                    </Button>
                  ))}
                </Grid>
              ) : (
                <NoContentContainer>
                  <Typography>Press the add button to get started</Typography>
                </NoContentContainer>
              )}
            </StyledContentContainer>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default Home;
