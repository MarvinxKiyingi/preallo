import { styled } from '@mui/material';
import { IMonthPage } from '../../../model/IMonthPage';
import MobileWrapper from '../../Container/MobileWrapper';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { BudgetDisplay } from '@/components/BudgetDisplay/BudgetDisplay';
import { calculatePercentage } from '@/utils/functions/calculatePercentage';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import ExpenseDisplay from './ExpenseDisplay';
import { calculateTotalAmountByPurpose } from '@/utils/functions/calculateTotalAmountByPurpose';

const HeaderSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(3),
  gap: theme.spacing(3),
  background: theme.palette.primary.main,

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
  },
}));

const BudgetOverview = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(5),
  },
}));

const Mobile = ({
  session,
  month,
  open,
  editOpen,
  handleOpen,
  handleClose,
  handleEditOpen,
  handleEditClose,
  handleSubmit,
  editHandleSubmit,
  register,
  editRegister,
  editControl,
  errors,
  editErrors,
  submitFormContentHandler,
  submitEditFormContentHandler,
  categoryList,
  purposeList,
  statusList,
  expensesTotal,
  currentMonthExpenses,
  daysUntilPayday,
  selectedExpense,
  onChipClick,
  activeFilter,
  statusFilters,
}: IMonthPage) => {
  const imgUrl = session?.user?.image;
  const { salary, salaryAsString, monthName, goal } = month;
  const { difference, differenceAsString, percentage } = calculatePercentage(
    expensesTotal,
    salary
  );

  const { needPercentage, wantPercentage, savePercentage } = goal;

  const needTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).needTotalValue;
  const wantTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).wantTotalValue;
  const saveTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).saveTotalValue;

  return (
    <MobileWrapper>
      <HeaderSection>
        <MobileNavigation
          title={monthName}
          src={imgUrl ? imgUrl : undefined}
          isDarkBg
        />

        <BudgetOverview>
          <BudgetDisplay
            progressValue={percentage}
            budget={difference}
            differenceAsString={differenceAsString}
            salary={salary}
            salaryAsString={salaryAsString}
            daysUntilPayday={daysUntilPayday}
            needTotalValue={needTotalValue}
            wantTotalValue={wantTotalValue}
            saveTotalValue={saveTotalValue}
            needGoalPercentage={needPercentage}
            wantGoalPercentage={wantPercentage}
            saveGoalPercentage={savePercentage}
            fullWidth
          />
        </BudgetOverview>
      </HeaderSection>

      <AddExpense
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        submitFormContentHandler={submitFormContentHandler}
        categoryList={categoryList}
        purposeList={purposeList}
        statusList={statusList}
        onChipClick={onChipClick}
        activeFilter={activeFilter}
        statusFilters={statusFilters}
      />

      <EditExpense
        open={editOpen}
        handleClose={handleEditClose}
        handleSubmit={editHandleSubmit}
        register={editRegister}
        errors={editErrors}
        submitFormContentHandler={submitEditFormContentHandler}
        categoryList={categoryList}
        purposeList={purposeList}
        statusList={statusList}
        expenseUuid={selectedExpense?.uuid || ''}
        defaultAmount={selectedExpense?.amount}
        defaultExpense={selectedExpense?.expense}
        defaultCategory={selectedExpense?.category}
        defaultPurpose={selectedExpense?.purpose}
        defaultStatus={selectedExpense?.status}
        control={editControl}
      />

      <ExpenseDisplay
        currentMonthExpenses={currentMonthExpenses}
        onExpenseClick={handleEditOpen}
      />
    </MobileWrapper>
  );
};

export default Mobile;
