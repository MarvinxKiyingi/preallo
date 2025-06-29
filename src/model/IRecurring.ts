import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';
import { Session } from 'next-auth/core/types';
import { IRecurringFormContent } from './IRecurringFormContent';
import { IExpenses } from './IExpenses';

export type IRecurring = IRecurringFormContent & {
  session: Session | null;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<IAddExpenseForm>;
  submitFormContentHandler: SubmitHandler<IAddExpenseForm>;
  recurringExpenses: IExpenses;
  expensesTotal: number;
};
