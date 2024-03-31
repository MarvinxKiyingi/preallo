import { useMemo } from 'react';

export const useDaysLeft = (daysUntilPayday: number) => {
  const daysLeft = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let nextPayday;

    // Calculate days until 25th of next month
    if (currentDay >= daysUntilPayday) {
      const nextMonth = (currentMonth + 1) % 12;
      const nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;
      const nextPaydayDate = new Date(nextYear, nextMonth, daysUntilPayday);
      const timeDifference = nextPaydayDate.getTime() - today.getTime();
      nextPayday = Math.ceil(timeDifference / (1000 * 3600 * 24));
    } else {
      // Calculate remaining days until 25th of current month
      nextPayday = daysUntilPayday - currentDay;
    }

    return nextPayday;
  }, [daysUntilPayday]);

  return daysLeft;
};
