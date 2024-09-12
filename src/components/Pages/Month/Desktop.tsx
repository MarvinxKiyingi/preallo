import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import { IMonthPage } from '../../../model/IMonthPage';
import ContentContainer from '../../Container/ContentContainer';
import DesktopNavigation from '../../Navigation/DesktopNavigation/DesktopNavigation';
import { useDaysLeft } from '@/utils/functions/daysLeft';
import CurrencyFormat from 'react-currency-format';
import { calculatePercentage } from '@/utils/functions/calculatePercentage';
import { grey } from '@/styles/colors/grey';
import { CircularProgress } from '@/components/CircularProgress/CircularProgress';
import AddExpense from './AddExpense';
import ExpenseDisplay from './ExpenseDisplay';
import { theme } from '@/styles/theme/muiTheme';

const MonthDetailsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  gap: theme.spacing(2),

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
  padding: theme.spacing(0, 2),

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(3),
  },
}));

const Desktop = ({
  month,
  daysUntilPayday,
  expensesTotal,
  open,
  handleOpen,
  handleClose,
  handleSubmit,
  register,
  errors,
  submitFormContentHandler,
  categoryList,
  purposeList,
  currentMonthExpenses,
}: IMonthPage) => {
  const { monthName, salary, salaryAsString, slug } = month;
  const daysLeft = useDaysLeft(daysUntilPayday);
  const { differenceAsString, percentage } = calculatePercentage(
    expensesTotal,
    salary
  );
  const lgBreakpoint = useMediaQuery(
    `${theme.breakpoints.up('lg').replace('@media ', '')}`
  );

  return (
    <>
      <DesktopNavigation
        disableHighlight={monthName?.toLowerCase()}
        monthName={monthName}
        monthSlug={slug}
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
              <CurrencyFormat
                value={differenceAsString}
                displayType={'text'}
                thousandSeparator={' '}
                decimalSeparator={','}
                thousandSpacing={'3'}
                renderText={(value) => (
                  <Typography className='budget' variant='h3'>
                    {value}
                  </Typography>
                )}
              />
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
                  needTotalValue={0}
                  wantTotalValue={0}
                  saveTotalValue={0}
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
            />

            <ExpenseDisplay currentMonthExpenses={currentMonthExpenses} />
          </RightContainer>
        </MonthDetailsContainer>
      </ContentContainer>
    </>
  );
};

export default Desktop;
