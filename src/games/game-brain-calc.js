
import { gameEngine } from '../index.js';
import { getRandomInteger } from '../utils.js';

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, 3)];
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  let randomExpression = '';
  let answer = 0;
  const answers = {};
  if (operator === '+') {
    randomExpression = `${firstNumber} + ${secondNumber}`;
    answer = firstNumber + secondNumber;
  }
  if (operator === '-') {
    randomExpression = `${firstNumber} - ${secondNumber}`;
    answer = firstNumber - secondNumber;
  }
  if (operator === '*') {
    randomExpression = `${firstNumber} * ${secondNumber}`;
    answer = firstNumber * secondNumber;
  }
  answers.expression = randomExpression;
  answers.answer = String(answer);
  return answers;
};



const gameBrainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const valueToAsk = () => getRandomExpression().expression;
  const rightAnswer = () => getRandomExpression().answer;
  gameEngine(gameRules, valueToAsk, rightAnswer);
};

export default gameBrainCalc;
