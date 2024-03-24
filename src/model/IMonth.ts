export type IMonth = {
  monthName: string;
  salary?: string;
  year?: string;
  slug?: string;
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
