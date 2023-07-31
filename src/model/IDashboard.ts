import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IModalForm } from './IModalForm';
import { IMonths } from './IMonth';
import { IDashboardFormContent } from './IDashboardFormContent';
import { Session } from 'next-auth/core/types';

export type IDashboard = IDashboardFormContent & {
  session: Session;
  yearList: string[];
  currentYear: () => string;
  handleOpen: () => void;
  handleSubmit: UseFormHandleSubmit<IModalForm>;
  submitFormContentHandler: SubmitHandler<IModalForm>;
  months: IMonths;
  open: boolean;
};
