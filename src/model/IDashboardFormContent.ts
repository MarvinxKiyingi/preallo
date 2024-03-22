import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAddMonthForm } from './IModalForm';

export type IDashboardFormContent = {
  monthList: string[];
  handleClose: () => void;
  register: UseFormRegister<IAddMonthForm>;
  errors: FieldErrors<IAddMonthForm>;
};
