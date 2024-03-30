import { formatNumberWithDecimal } from './formatNumberWithDecimal';

export const calculatePercentage = (
  smallerNumber: number,
  largerNumber: number
) => {
  const difference = largerNumber - smallerNumber;
  const percentage = (difference / largerNumber) * 100;
  const differenceAsString = formatNumberWithDecimal(difference);

  return { percentage, differenceAsString, difference };
};
