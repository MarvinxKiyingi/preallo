export const currentYear = () => {
  return new Date().getFullYear().toString();
};

const referenceYear = 2023;
export const isNewYear = Number(currentYear()) > referenceYear;
