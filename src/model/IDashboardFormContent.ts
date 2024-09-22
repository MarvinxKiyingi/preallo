import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IGoal } from './IGoal';

export type IDashboardFormContent = {
  monthList: string[];
  goal: IGoal;
  handleClose: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};
