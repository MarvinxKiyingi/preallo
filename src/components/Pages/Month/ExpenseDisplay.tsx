import { Expense } from '@/components/Expense/Expense';
import { IExpenseDisplay } from '@/model/IExpenseDisplay';
import { NoContentContainer } from '@/pages';
import { Typography, styled } from '@mui/material';
import React from 'react';

const StyledExpenseDisplay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {},
}));

const ExpenseDisplay = ({ currentMonthExpenses }: IExpenseDisplay) => {
  return (
    <StyledExpenseDisplay>
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
    </StyledExpenseDisplay>
  );
};

export default ExpenseDisplay;
