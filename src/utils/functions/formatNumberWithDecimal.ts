export const formatNumberWithDecimal = (number: number) => {
  // Check if the number is an integer
  if (Number.isInteger(number)) {
    return number.toFixed(2); // Add ".00" to the integer
  } else {
    return number.toString(); // Number already has decimal, return as is
  }
};
