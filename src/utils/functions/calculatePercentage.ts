export const calculatePercentage = (
  smallerNumber: number,
  largerNumber: number
) => {
  var difference = largerNumber - smallerNumber;
  var percentage = (difference / largerNumber) * 100;
  return { percentage, difference };
};
