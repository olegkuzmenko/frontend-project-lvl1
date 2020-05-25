import { gameEngine } from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const valueToAsk = () => getRandomInteger(1, 100);
  const isEven = (integer) => (integer % 2 === 0);
  const rightAnswer = (currentValue) => predicatToString(isEven(currentValue));
  gameEngine(gameRules, valueToAsk, rightAnswer);
};

export default gameBrainEven;
