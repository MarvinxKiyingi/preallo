export const toCamelCase = (str: string): string =>
  str.toLowerCase().replace(/ (\w)/g, (_, c: string) => c.toUpperCase());
