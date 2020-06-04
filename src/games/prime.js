import runEngine from '../index.js';
import { generateRandomInteger, booleanToStringAnswer } from '../utils.js';

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
  const question = generateRandomInteger(1, 100);
  const rightAnswer = booleanToStringAnswer(isPrime(question));
  return [question, rightAnswer];
};

export default () => runEngine(gameRule, generateGameData);
