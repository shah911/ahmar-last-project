export const sliceArray = <T>(array: T[], size: number): T[][] => {
  const slice: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    slice.push(array.slice(i, i + size));
  }

  return slice;
};
