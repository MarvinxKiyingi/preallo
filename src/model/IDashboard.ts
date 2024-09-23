import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { IAddMonthForm } from './IModalForm';
import { IMonths } from './IMonth';
import { IDashboardFormContent } from './IDashboardFormContent';
import { Session } from 'next-auth/core/types';
import { IGoal } from './IGoal';

export type IDashboard = IDashboardFormContent & {
  session: Session;
  yearList: string[];
  currentYear: () => string;
  handleOpen: () => void;
  handleSubmit: UseFormHandleSubmit<IAddMonthForm>;
  submitFormContentHandler: SubmitHandler<IAddMonthForm>;
  months: IMonths;
  open: boolean;
  goal: IGoal;
};
