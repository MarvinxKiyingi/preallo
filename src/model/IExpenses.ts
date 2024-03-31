import { ICategory } from './ICategory';
import { IMonth } from './IMonth';

export type IExpense = {
  amount: number;
  amountAsString: string;
  expense: string;
  category: ICategory;
  purpose: string;
  monthDetails: IMonth;
  uuid: string;
  createdAt: string;
};
export type IExpenses = Array<IExpense>;
