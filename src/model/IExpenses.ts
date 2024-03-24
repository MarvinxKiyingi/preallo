import { ICategory } from './ICategory';
import { IMonth } from './IMonth';

export type IExpense = {
  amount: number;
  expense: string;
  category: ICategory;
  priority: string;
  monthDetails: IMonth;
};
export type IExpenses = Array<IExpense>;
