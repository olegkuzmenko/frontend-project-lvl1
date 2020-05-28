
import gameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';


const threeOperators = ['+', '-', '*'];

const getRandomOperator = (operators) => {
  const begin = 0;
  const end = operators.length;
  return operators[getRandomInteger(begin, end)];
};

const getRandomExpressionAnswer = (firstNumber, secondNumber, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
      break;
  }
  return answer;
};

const gameRule = 'What is the result of the expression?';

const gameBrainCalc = () => {
  const getRoundResults = () => {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const operator = getRandomOperator(threeOperators);
    const rightAnswer = String(getRandomExpressionAnswer(firstNumber, secondNumber, operator));
    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    return [expression, rightAnswer];
  };
  gameEngine(gameRule, getRoundResults);
};

export default gameBrainCalc;
