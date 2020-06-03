import runGameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';

const listOfOperators = ['+', '-', '*'];

const getRandomOperator = (operators) => {
  const begin = 0;
  const end = operators.length;
  return operators[getRandomInteger(begin, end)];
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
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  const operator = getRandomOperator(listOfOperators);
  const rightAnswer = String(calculate(firstNumber, secondNumber, operator));
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
