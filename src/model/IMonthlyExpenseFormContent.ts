import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';

export type IMonthlyExpenseFormContent = {
  categoryList: string[];
  purposeList: string[];
  handleClose: () => void;
  register: UseFormRegister<IAddExpenseForm>;
  errors: FieldErrors<IAddExpenseForm>;
};
