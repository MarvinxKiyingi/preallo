export const calculateExpensePercentage = (
  salary: number,
  totalExpenses: number
): { asNumber: number; asString: string } => {
  if (salary <= 0) {
    return { asNumber: 0, asString: '0%' };
  }

  const asNumber = (totalExpenses / salary) * 100;
  const asString = `${Math.ceil(asNumber)}%`;

  return { asNumber, asString };
};
