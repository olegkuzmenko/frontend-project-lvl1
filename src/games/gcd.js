import { gameEngine } from '../index.js';
import { getRandomInteger } from '../utils.js';


const getGreatestCommonDevisor = (firstNumber, secondNumber) => {
  let devisor = 0;
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    devisor = secondNumber;
  } else {
    devisor = firstNumber;
  }

  while (!(firstNumber % devisor === 0 && secondNumber % devisor === 0)) {
    devisor -= 1;
  }
  return String(devisor);
};

const gameBrainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const game = () => {
    const values = [];
    const firstNumber = getRandomInteger(1, 100);
    const secondNumber = getRandomInteger(1, 100);
    const currentValue = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getGreatestCommonDevisor(firstNumber, secondNumber);
    values[0] = currentValue;
    values[1] = rightAnswer;
    return values;
  };
  gameEngine(gameRules, game);
};

export default gameBrainGcd;
