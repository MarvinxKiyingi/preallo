import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IGoal } from './IGoal';

export type IGoalSettingsFormContent = {
  goal: IGoal;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};
