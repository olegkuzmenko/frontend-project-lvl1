import {
  getRandomInteger, predicatToString, gameEngine,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const currentNumber = getRandomInteger(1, 100);
  const rightAnswer = predicatToString(isEven(currentNumber));
  gameEngine(gameRules, currentNumber, rightAnswer);
};

export default gameBrainEven;
