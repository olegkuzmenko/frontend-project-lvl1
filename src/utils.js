export const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const predicatToString = (boolean) => (boolean ? 'yes' : 'no');