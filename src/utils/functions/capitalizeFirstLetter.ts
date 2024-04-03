export const capitalizeFirstLetter = (word: string) => {
  return (
    word.charAt(0).toLowerCase().toUpperCase() + word.toLowerCase().slice(1)
  );
};
