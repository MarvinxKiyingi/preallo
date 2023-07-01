import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IModalForm } from './IModalForm';

export type IDashboardFormContent = {
  monthList: string[];
  handleClose: () => void;
  register: UseFormRegister<IModalForm>;
  errors: FieldErrors<IModalForm>;
};
