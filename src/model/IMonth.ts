import { IGoal } from './IGoal';

export type IMonth = {
  monthName: string;
  salary: number;
  salaryAsString: string;
  year: string;
  slug: string;
  uuid: string;
  goal: IGoal;
};
export type IMonths = Array<IMonth>;

export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
