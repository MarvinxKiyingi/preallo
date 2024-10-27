export const convertToTimestamp = (dateString: string) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}`).getTime(); // Convert to "YYYY-MM-DD" format
};
