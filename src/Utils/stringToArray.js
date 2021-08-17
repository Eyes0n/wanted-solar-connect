export const stringToArray = (str) =>
  str
    .trim()
    .split(',')
    .map((str) => parseInt(str));
