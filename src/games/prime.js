import gameEngine from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isPrime = (integer) => {
  if (integer < 2) {
    return false;
  }
  if (integer === 2) {
    return true;
  }
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return true;
};
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBrainPrime = () => {
  const getRoundResults = () => {
    const currentValue = getRandomInteger(1, 100);
    const rightAnswer = predicatToString(isPrime(currentValue));
    return [currentValue, rightAnswer];
  };
  gameEngine(gameRule, getRoundResults);
};

export default gameBrainPrime;
