import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';
import { Session } from 'next-auth/core/types';
import { ISubscriptionsFormContent } from './ISubscriptionsFormContent';
import { IExpenses } from './IExpenses';

export type ISubscriptions = ISubscriptionsFormContent & {
  session: Session | null;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<IAddExpenseForm>;
  submitFormContentHandler: SubmitHandler<IAddExpenseForm>;
  subscriptions: IExpenses;
  expensesTotal: number;
};
