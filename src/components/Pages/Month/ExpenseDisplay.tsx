import { Expense } from '@/components/Expense/Expense';
import { IExpenseDisplay } from '@/model/IExpenseDisplay';
import { NoContentContainer } from '@/pages';
import { Typography, styled } from '@mui/material';
import React from 'react';

const StyledExpenseDisplay = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'scroll',
  position: 'relative',
  padding: 'unset',
  marginTop: `${theme.spacing(2)}  `,
  marginBottom: `${theme.spacing(0)} !important `,

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    height: theme.spacing(2),
    zIndex: 1,
    pointerEvents: 'none',
  },

  '&::before': {
    top: 0,
    mask: 'linear-gradient(to bottom, #F7F6F8, transparent)',
    backdropFilter: 'blur(2px)',
  },
  '&::after': {
    bottom: 0,
    mask: 'linear-gradient(to top, #F7F6F8, transparent)',
    backdropFilter: 'blur(8px)',
  },

  [theme.breakpoints.up('sm')]: {},
}));
const Scroll = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  height: '100%',
  overflow: 'scroll',
  padding: theme.spacing(2, 3),

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
}));

const ExpenseDisplay = ({ currentMonthExpenses }: IExpenseDisplay) => {
  return (
    <StyledExpenseDisplay>
      <Scroll>
        {currentMonthExpenses?.length > 0 ? (
          currentMonthExpenses.map((expense) => (
            <Expense
              key={expense.uuid}
              amount={expense.amount}
              date={expense.createdAt}
              title={expense.expense}
              category={expense.category}
              amountAsString={expense.amountAsString}
              purpose={expense.purpose}
              fullWidth
            />
          ))
        ) : (
          <NoContentContainer>
            <Typography>Press the add button to get started</Typography>
          </NoContentContainer>
        )}
      </Scroll>
    </StyledExpenseDisplay>
  );
};

export default ExpenseDisplay;
