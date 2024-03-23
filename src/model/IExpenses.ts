import { IMonth } from './IMonth';

export type IExpense = {
  amount: number;
  expense: string;
  category: string;
  priority: string;
  monthDetails: IMonth;
};
export type IExpenses = Array<IExpense>;
