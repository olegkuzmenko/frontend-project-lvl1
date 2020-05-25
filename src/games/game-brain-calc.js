
import { gameEngine } from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameBrainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const game = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInteger(0, 3)];
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    let randomExpression = '';
    let answer = 0;
    const values = {};
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
    values.expression = randomExpression;
    values.answer = String(answer);
    return values;
  }
  gameEngine(gameRules, game);
};

export default gameBrainCalc;
