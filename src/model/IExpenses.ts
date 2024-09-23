import { ICategory } from './ICategory';
import { IMonth } from './IMonth';
import { IPurpose } from './IPurpose';

export type IExpense = {
  amount: number;
  amountAsString: string;
  expense: string;
  category: ICategory;
  purpose: IPurpose;
  monthDetails: IMonth;
  uuid: string;
  createdAt: string;
};
export type IExpenses = Array<IExpense>;
