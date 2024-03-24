import { Session } from 'next-auth';
import { IMonth } from './IMonth';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';
import { IMonthlyExpenseFormContent } from './IMonthlyExpenseFormContent';
import { IExpenses } from './IExpenses';

export type IMonthPage = IMonthlyExpenseFormContent & {
  session: Session | null;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<IAddExpenseForm>;
  submitFormContentHandler: SubmitHandler<IAddExpenseForm>;
  currentMonthExpenses: IExpenses;
  expensesTotal: number;
  month: IMonth;
};
