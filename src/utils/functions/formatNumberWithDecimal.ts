export const formatNumberWithDecimal = (number: number) => {
  return new Intl.NumberFormat('sv-SE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};
