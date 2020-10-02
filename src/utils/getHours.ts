export const getHours = (): 1 | 0 => {
  return 7 < new Date().getHours() && new Date().getHours() < 18 ? 1 : 0;
};
