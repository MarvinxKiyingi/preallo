import { User } from 'firebase/auth';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IModalForm } from './IModalForm';
import { IMonths } from './IMonth';
import { IDashboardFormContent } from './IDashboardFormContent';

export type IDashboard = IDashboardFormContent & {
  currentUser: User | null | undefined;
  yearList: string[];
  currentYear: () => string;
  handleOpen: () => void;
  handleSubmit: UseFormHandleSubmit<IModalForm>;
  submitFormContentHandler: SubmitHandler<IModalForm>;
  months: IMonths;
  open: boolean;
};
