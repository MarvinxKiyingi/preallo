export const calculateProgressValue = (
  value: number,
  salary: number
): { asNumber: number; asString: string } => {
  const asNumber = Math.ceil((value / salary) * 100 * 10) / 10; // One decimal place
  const asString = `${Math.ceil(asNumber)}%`; // Rounded up for the string
  return { asNumber, asString };
};
