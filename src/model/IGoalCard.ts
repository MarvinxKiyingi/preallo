import { IGoalSettingsForm } from '@/components/Pages/Settings/Goal/Mobile';
import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';

export type IGoalCardProps = {
  title: string;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: any) => void;
  goal: {
    needPercentage: number;
    wantPercentage: number;
    savePercentage: number;
  };
  percentageList: number[];
  register: UseFormRegister<any>;
  errors: FieldErrors<IGoalSettingsForm>;
  loading?: boolean;
};
