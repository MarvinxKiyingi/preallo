import React from 'react';
import { AddRow } from '@/components/AddRow/AddRow';
import AppContainer from '@/components/Container/AppContainer';
import { MobileNavigation } from '@/components/Navigation/MobileNavigation/MobileNavigation';
import { TabBar } from '@/components/TabBar/TabBar';
import { TotalDisplay } from '@/components/TotalDisplay/TotalDisplay';
import { ISubscriptions } from '@/model/ISubscriptions';
import { settingsTabBarList } from '@/utils/functions/settingsTabBarList';
import Dialog from '@mui/material/Dialog';
import FormContent from '../../Month/FormContent';
import SettingsExpenseDisplay from '@/components/Expense/SettingsExpenseDisplay';
import { styled } from '@mui/material/styles';

const StyledTotalDisplay = styled(TotalDisplay)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const Mobile = ({
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
  subscriptions,
  expensesTotal,
}: ISubscriptions) => {
  return (
    <AppContainer>
      <MobileNavigation hideProfile showSignOutButton title='Settings' />

      <TabBar tabList={settingsTabBarList} />

      <StyledTotalDisplay total={expensesTotal} sx={{ marginTop: 'unset' }} />

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

      <SettingsExpenseDisplay expenses={subscriptions} />
    </AppContainer>
  );
};

export default Mobile;
