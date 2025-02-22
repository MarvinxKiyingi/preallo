import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAddExpenseForm } from './IModalForm';

export type ISubscriptionsFormContent = {
  categoryList: string[];
  purposeList: string[];
  statusList: string[];
  handleClose: () => void;
  register: UseFormRegister<IAddExpenseForm>;
  errors: FieldErrors<IAddExpenseForm>;
};
