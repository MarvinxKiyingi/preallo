import React from 'react';
import AppContainer from '../../../Container/AppContainer';
import DesktopNavigation from '../../../Navigation/DesktopNavigation/DesktopNavigation';
import ContentContainer from '../../../Container/ContentContainer';
import { useRouter } from 'next/router';
import { Dialog, Typography, styled } from '@mui/material';
import RightGridContentContainer from '../../../Container/RightGridContentContainer';
import { TabBar } from '@/components/TabBar/TabBar';
import { settingsTabBarList } from '@/utils/functions/settingsTabBarList';
import { IRecurring } from '@/model/IRecurring';
import { TotalDisplay } from '@/components/TotalDisplay/TotalDisplay';
import { AddRow } from '@/components/AddRow/AddRow';
import FormContent from '../../Month/FormContent';

const RightContent = styled('div')(({ theme }) => ({
  gridColumn: '1/-1',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const TabBarWrapper = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  maxHeight: '56px',
  alignItems: 'center',
}));

const StyledTotalDisplay = styled(TotalDisplay)(({ theme }) => ({
  padding: theme.spacing(4.5, 0),
}));
const Desktop = ({
  open,
  handleOpen,
  handleClose,
  handleSubmit,
  register,
  errors,
  submitFormContentHandler,
  categoryList,
  purposeList,
  statusList,
  recurringExpenses,
  expensesTotal,
}: IRecurring) => {
  const router = useRouter();
  const currentPageSlugList = router.pathname.split('/').filter(Boolean);

  return (
    <AppContainer>
      <>
        <DesktopNavigation highlightedValue={currentPageSlugList[0]} />
        <ContentContainer>
          <div className='titleContainer'>
            <Typography className='pageTitle'>Settings</Typography>
          </div>

          <RightGridContentContainer
            sx={{
              gridTemplateRows: 'unset !important',
            }}
          >
            <RightContent>
              <TabBarWrapper>
                <TabBar tabList={settingsTabBarList} />
              </TabBarWrapper>

              <StyledTotalDisplay total={expensesTotal} />

              <div>
                <AddRow
                  title='Expense'
                  version='secondary'
                  addIsVisible
                  onClick={() => handleOpen()}
                />

                <Dialog
                  onClose={() => handleClose()}
                  open={open}
                  maxWidth={'xs'}
                  fullWidth
                >
                  <form onSubmit={handleSubmit(submitFormContentHandler)}>
                    <FormContent
                      categoryList={categoryList}
                      purposeList={purposeList}
                      statusList={statusList}
                      handleClose={handleClose}
                      register={register}
                      errors={errors}
                    />
                  </form>
                </Dialog>
              </div>
            </RightContent>
          </RightGridContentContainer>
        </ContentContainer>
      </>
    </AppContainer>
  );
};

export default Desktop;
