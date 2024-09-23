import { IExpense } from '../../model/IExpenses';

export const calculateTotalAmountByPurpose = (
  expenses: IExpense[]
): {
  needTotalValue: number;
  wantTotalValue: number;
  saveTotalValue: number;
} => {
  return expenses.reduce(
    (totals, expense) => {
      const { purpose, amount } = expense;

      // Accumulate totals based on purpose
      if (purpose === 'Need') {
        totals.needTotalValue += amount;
      } else if (purpose === 'Want') {
        totals.wantTotalValue += amount;
      } else if (purpose === 'Save') {
        totals.saveTotalValue += amount;
      }

      return totals;
    },
    {
      needTotalValue: 0,
      wantTotalValue: 0,
      saveTotalValue: 0,
    }
  );
};
