import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const transformFullName = (firstName: string, lastName?: string) => {
  if (firstName && lastName) {
    return `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(
      lastName
    )}`;
  } else {
    return capitalizeFirstLetter(firstName);
  }
};
