import { Session } from 'next-auth';
import { IMonth } from './IMonth';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';
import { IMonthlyExpenseFormContent } from './IMonthlyExpenseFormContent';

export type IMonthPage = IMonth &
  IMonthlyExpenseFormContent & {
    session: Session | null;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    handleSubmit: UseFormHandleSubmit<IAddExpenseForm>;
    submitFormContentHandler: SubmitHandler<IAddExpenseForm>;
  };
