export const classMerge = (...classes) => {
  return classes
    .filter(cls => cls && typeof cls === 'string')
    .join(' ')
    .trim();
};