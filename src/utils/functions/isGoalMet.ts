export const isGoalMet = (goalPercentage: number, actualPercentage: number) => {
  return actualPercentage <= goalPercentage ? 'green' : 'red';
};
