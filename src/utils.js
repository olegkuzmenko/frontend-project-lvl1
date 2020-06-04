export const generateRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
};

export const booleanToStringAnswer = (boolean) => (boolean ? 'yes' : 'no');
