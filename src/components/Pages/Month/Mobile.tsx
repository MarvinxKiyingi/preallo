import { Dialog, Typography, styled } from '@mui/material';
import { IMonthPage } from '../../../model/IMonthPage';
import MobileWrapper from '../../Container/MobileWrapper';
import { MobileNavigation } from '../../Navigation/MobileNavigation/MobileNavigation';
import { TabBar } from '@/components/TabBar/TabBar';
import { BudgetDisplay } from '@/components/BudgetDisplay/BudgetDisplay';
import { AddRow } from '@/components/AddRow/AddRow';
import { Expense } from '@/components/Expense/Expense';
import { NoContentContainer } from '@/pages';
import FormContent from './FormContent';
import { calculatePercentage } from '@/utils/functions/calculatePercentage';

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

const AddExpense = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(),

  [theme.breakpoints.up('sm')]: {},
}));

const ExpenseDisplay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {},
}));

const Mobile = ({
  session,
  month,
  open,
  handleOpen,
  handleClose,
  handleSubmit,
  register,
  errors,
  submitFormContentHandler,
  categoryList,
  priorityList,
  expensesTotal,
  currentMonthExpenses,
}: IMonthPage) => {
  const imgUrl = session?.user?.image;
  const { salary, monthName } = month;
  const salaryAsNumber = Number(salary);
  const { difference, percentage } = calculatePercentage(
    expensesTotal,
    salaryAsNumber
  );

  const tabBarList = [
    { id: 'month', label: 'month', value: 'month' },
    { id: 'subscriptions', label: 'subscriptions', value: 'subscriptions' },
    { id: 'recurring', label: 'recurring', value: 'recurring' },
  ];

  return (
    <MobileWrapper>
      <HeaderSection>
        <MobileNavigation
          title={monthName}
          src={imgUrl ? imgUrl : undefined}
          isDarkBg
        />

        <TabBar tabList={tabBarList} isDarkBg />

        <BudgetOverview>
          <BudgetDisplay
            progressValue={percentage}
            budget={difference}
            salary={salaryAsNumber}
            daysUntilPayday={25}
            fullWidth
          />
        </BudgetOverview>
      </HeaderSection>
      <div>
        <AddExpense>
          <AddRow
            title='Add'
            version='secondary'
            chipsList={[
              {
                activated: true,
                id: 'all',
                label: 'All',
              },
            ]}
            addIsVisible
            filterIsVisible
            onClick={() => handleOpen()}
          />
        </AddExpense>

        <Dialog onClose={() => handleClose()} open={open} maxWidth={'xs'}>
          <form onSubmit={handleSubmit(submitFormContentHandler)}>
            <FormContent
              categoryList={categoryList}
              priorityList={priorityList}
              handleClose={handleClose}
              register={register}
              errors={errors}
            />
          </form>
        </Dialog>
      </div>

      <ExpenseDisplay>
        {currentMonthExpenses?.length > 0 ? (
          currentMonthExpenses.map((expense) => (
            <Expense
              key={expense.uuid}
              amount={expense.amount}
              date='20 March 2022'
              title={expense.expense}
              category={expense.category}
              fullWidth
            />
          ))
        ) : (
          <NoContentContainer>
            <Typography>Press the add button to get started</Typography>
          </NoContentContainer>
        )}
      </ExpenseDisplay>
    </MobileWrapper>
  );
};

export default Mobile;
