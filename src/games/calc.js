
import gameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';


const listOfOperators = ['+', '-', '*'];

const getRandomOperator = (operators) => {
  const begin = 0;
  const end = operators.length;
  return operators[getRandomInteger(begin, end)];
};

const getExpressionResult = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const gameRule = 'What is the result of the expression?';

const gameBrainCalc = () => {
  const generateGameData = () => {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const operator = getRandomOperator(listOfOperators);
    const rightAnswer = String(getExpressionResult(firstNumber, secondNumber, operator));
    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    return [expression, rightAnswer];
  };
  gameEngine(gameRule, generateGameData);
};

export default gameBrainCalc;
