import { ICategory } from './ICategory';
import { IMonth } from './IMonth';

export type IExpense = {
  amount: number;
  expense: string;
  category: ICategory;
  priority: string;
  monthDetails: IMonth;
  uuid: string;
  fullDate: string;
};
export type IExpenses = Array<IExpense>;
