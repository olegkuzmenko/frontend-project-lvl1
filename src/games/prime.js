import { gameEngine } from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isPrime = (integer) => {
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

const gameBrainPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = () => {
    const values = [];
    const currentValue = getRandomInteger(1, 100);
    const rightAnswer = predicatToString(isPrime(currentValue));
    values[0] = currentValue;
    values[1] = rightAnswer;
    return values;
  };
  gameEngine(gameRules, game);
};

export default gameBrainPrime;
