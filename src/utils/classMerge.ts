export const classMerge = (...classes:string[]) => {
  return classes
    .filter(cls => cls && typeof cls === 'string')
    .join(' ')
    .trim();
};