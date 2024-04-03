import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type IDashboardFormContent = {
  monthList: string[];
  handleClose: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};
