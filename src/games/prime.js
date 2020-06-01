import runGameEngine from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isPrime = (integer) => {
  if (integer < 2) {
    return false;
  }
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const currentValue = getRandomInteger(1, 100);
  const rightAnswer = predicatToString(isPrime(currentValue));
  return [currentValue, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
