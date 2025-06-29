import { IMonthPage } from './IMonthPage';
import { IExpense } from './IExpenses';

export type IExpenseDisplay = Pick<IMonthPage, 'currentMonthExpenses'> & {
  // eslint-disable-next-line no-unused-vars
  onExpenseClick?: (expense: IExpense) => void;
};
