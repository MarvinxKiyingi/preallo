export const createOrUpdateYearList = (
  currentYear: string,
  yearsList: [string]
) => {
  if (yearsList) {
    if (!yearsList.includes(currentYear)) {
      yearsList.push(currentYear);
    }
  } else {
    yearsList;
  }

  return yearsList;
};
