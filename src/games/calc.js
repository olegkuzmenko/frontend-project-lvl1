import runEngine from '../index.js';
import { generateRandomInteger } from '../utils.js';

const operators = ['+', '-', '*'];

const getRandomOperator = (array) => {
  const begin = 0;
  const end = array.length - 1;
  return array[generateRandomInteger(begin, end)];
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown order state: ${operator}`);
  }
};

const gameRule = 'What is the result of the expression?';

const generateGameData = () => {
  const firstNumber = generateRandomInteger(1, 100);
  const secondNumber = generateRandomInteger(1, 100);
  const operator = getRandomOperator(operators);
  const rightAnswer = String(calculate(firstNumber, secondNumber, operator));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

export default () => runEngine(gameRule, generateGameData);
