import { monthList } from '../Variables/monthList';

export const validateMonth = (month: number) => {
  const currentMonthNumber = new Date().getMonth();
  const currentMonthName = monthList[currentMonthNumber];

  console.log(currentMonthName);
  console.log(month);
};
