import { Session } from 'next-auth';
import { IMonth } from './IMonth';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
  Control,
} from 'react-hook-form';
import { IAddExpenseForm, IEditMonthForm } from './IModalForm';
import { IMonthlyExpenseFormContent } from './IMonthlyExpenseFormContent';
import { IExpenses, IExpense } from './IExpenses';

export type IMonthPage = IMonthlyExpenseFormContent & {
  session: Session | null;
  open: boolean;
  editOpen: boolean;
  selectedExpense: IExpense | null;
  handleOpen: () => void;
  handleClose: () => void;
  // eslint-disable-next-line no-unused-vars
  handleEditOpen: (expense: IExpense) => void;
  handleEditClose: () => void;
  handleSubmit: UseFormHandleSubmit<IAddExpenseForm>;
  editHandleSubmit: UseFormHandleSubmit<IEditMonthForm>;
  submitFormContentHandler: SubmitHandler<IAddExpenseForm>;
  submitEditFormContentHandler: SubmitHandler<IEditMonthForm>;
  editRegister: UseFormRegister<IEditMonthForm>;
  editErrors: FieldErrors<IEditMonthForm>;
  editControl: Control<IEditMonthForm>;
  currentMonthExpenses: IExpenses;
  expensesTotal: number;
  month: IMonth;
  daysUntilPayday: number;
};
