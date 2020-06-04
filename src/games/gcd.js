import runEngine from '../index.js';
import { generateRandomInteger } from '../utils.js';

const getGreatestCommonDevisor = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGreatestCommonDevisor(secondNumber, firstNumber % secondNumber);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const firstNumber = generateRandomInteger(1, 100);
  const secondNumber = generateRandomInteger(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGreatestCommonDevisor(firstNumber, secondNumber));
  return [question, rightAnswer];
};

export default () => runEngine(gameRule, generateGameData);
