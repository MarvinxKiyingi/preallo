import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import { IMonthPage } from '../../../model/IMonthPage';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import { useDaysLeft } from '@/utils/functions/daysLeft';
import { calculatePercentage } from '@/utils/functions/calculatePercentage';
import { grey } from '@/styles/colors/grey';
import { CircularProgress } from '@/components/CircularProgress/CircularProgress';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import ExpenseDisplay from './ExpenseDisplay';
import { theme } from '@/styles/theme/muiTheme';
import { calculateTotalAmountByPurpose } from '@/utils/functions/calculateTotalAmountByPurpose';
import { TotalDisplay } from '@/components/TotalDisplay/TotalDisplay';

const MonthDetailsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  gap: theme.spacing(2),
  height: '100%',
  overflow: 'hidden',

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(3),
  },
}));

const LeftContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing(2),

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(3),
  },

  '.budgetContainer, .salaryContainer': {
    display: 'flex',
    flex: 1,
  },
  '.budgetContainer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(),

    '.title, .description': {
      color: grey.light[500],
    },
    '.title': {
      fontWeight: 600,

      [theme.breakpoints.up('lg')]: {
        ...theme.typography.h3,
        fontWeight: 600,
      },
    },
    '.description': {
      [theme.breakpoints.up('lg')]: {
        ...theme.typography.body1,
      },
    },

    '.budget': {
      fontWeight: 600,

      [theme.breakpoints.up('lg')]: {
        ...theme.typography.h2,
        fontWeight: 600,
      },
    },
  },
  '.salaryContainer': {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.spacing(),
    backgroundColor: theme.palette.background.accent,
  },
}));

const RightContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: theme.spacing(2),
  overflow: 'scroll',

  '>*': {
    padding: theme.spacing(0, 2),
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(3),
  },
}));

const Desktop = ({
  month,
  daysUntilPayday,
  expensesTotal,
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
  currentMonthExpenses,
  selectedExpense,
  onChipClick,
  activeFilter,
  statusFilters,
}: IMonthPage) => {
  const { monthName, salary, salaryAsString, slug, goal } = month;
  const daysLeft = useDaysLeft(daysUntilPayday);
  const { difference, percentage } = calculatePercentage(expensesTotal, salary);
  const { needPercentage, wantPercentage, savePercentage } = goal;
  const lgBreakpoint = useMediaQuery(
    `${theme.breakpoints.up('lg').replace('@media ', '')}`
  );

  const needTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).needTotalValue;
  const wantTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).wantTotalValue;
  const saveTotalValue =
    calculateTotalAmountByPurpose(currentMonthExpenses).saveTotalValue;

  return (
    <>
      <DesktopNavigation
        disableHighlight={monthName?.toLowerCase()}
        highlightedValue='dashboard'
        slug={slug}
      />
      <ContentContainer>
        <div className='titleContainer'>
          <Typography className='pageTitle'>{monthName}</Typography>
        </div>
        <MonthDetailsContainer>
          <LeftContainer>
            <div className='budgetContainer'>
              {daysLeft > 0 && (
                <Typography className='description' variant='body2'>
                  {`Left to spend, for the next ${daysLeft} days`}
                </Typography>
              )}
              <TotalDisplay total={difference} />
            </div>

            <div className='salaryContainer'>
              <Box width={'fit-content'} height={'fit-content'}>
                <CircularProgress
                  percentageValue={percentage}
                  innerContent='indicators'
                  thickness={4.2}
                  salaryAsString={salaryAsString}
                  size={lgBreakpoint ? 300 : 250}
                  salary={salary}
                  needTotalValue={needTotalValue}
                  wantTotalValue={wantTotalValue}
                  saveTotalValue={saveTotalValue}
                  needGoalPercentage={needPercentage}
                  wantGoalPercentage={wantPercentage}
                  saveGoalPercentage={savePercentage}
                />
              </Box>
            </div>
          </LeftContainer>

          <RightContainer>
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
          </RightContainer>
        </MonthDetailsContainer>
      </ContentContainer>
    </>
  );
};

export default Desktop;
