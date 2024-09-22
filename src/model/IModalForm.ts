import { IGoal } from './IGoal';

export type IModalForm = {
  amount: number;
  expense: string;
  selected: string;
  selectedTwo: string;
  needPercentage?: number;
  savePercentage?: number;
  wantPercentage?: number;
};

export type IAddMonthForm = IGoal & {
  amount: number;
  selected: string;
};

export type IAddExpenseForm = {
  amount: number;
  expense: string;
  selected: string;
  selectedTwo: string;
};
