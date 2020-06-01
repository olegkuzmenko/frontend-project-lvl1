import runGameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';


const getGreatestCommonDevisor = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGreatestCommonDevisor(secondNumber, firstNumber % secondNumber);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  const currentValue = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGreatestCommonDevisor(firstNumber, secondNumber));
  return [currentValue, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
