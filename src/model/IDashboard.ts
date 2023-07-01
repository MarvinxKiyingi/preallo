import { User } from 'firebase/auth';
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { IModalForm } from './IModalForm';
import { IMonths } from './IMonth';

export type IDashboard = {
  currentUser: User | null | undefined;
  yearList: string[];
  currentYear: () => string;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: UseFormHandleSubmit<IModalForm>;
  submitFormContentHandler: SubmitHandler<IModalForm>;
  monthList: string[];
  months: IMonths;
  open: boolean;
  register: UseFormRegister<IModalForm>;
  errors: FieldErrors<IModalForm>;
};
