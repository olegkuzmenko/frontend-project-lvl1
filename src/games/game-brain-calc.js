
import { gameEngine } from '../index.js';
import { getRandomInteger } from '../utils.js';


const threeOperators = ['+', '-', '*'];

const getOperator = (operators) => {
  const operator = operators[getRandomInteger(0, 3)];
  return operator;
};

const getRandomExpression = (firstNumber, secondNumber, operator) => {
  const values = []
  let expression = '';
  let answer = 0;
  switch(operator) {
    case '+':
      expression = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
      break;
    case '-':
      expression = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
      break
    case '*':
      expression = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
      break;
  }
  values[0] = expression;
  values[1] = String(answer);
  return values;
};

const gameBrainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const game = () => {
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    return getRandomExpression(firstNumber, secondNumber, getOperator(threeOperators));
  };
  gameEngine(gameRules, game);
};

export default gameBrainCalc;
