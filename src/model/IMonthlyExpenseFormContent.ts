import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAddExpenseForm, IEditMonthForm } from './IModalForm';

export type IMonthlyExpenseFormContent = {
  categoryList: string[];
  purposeList: string[];
  statusList: string[];
  handleClose: () => void;
  register: UseFormRegister<IAddExpenseForm>;
  errors: FieldErrors<IAddExpenseForm>;
};

export type IEditMonthlyExpenseFormContent = {
  categoryList: string[];
  purposeList: string[];
  statusList: string[];
  handleClose: () => void;
  register: UseFormRegister<IEditMonthForm>;
  errors: FieldErrors<IEditMonthForm>;
};
