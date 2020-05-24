import {
  getRandomInteger, predicatToString, gameEngine,
} from '../index.js';

const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const whatToAsk = () => getRandomInteger(1, 100);
  const isEven = (integer) => (integer % 2 === 0);
  const rightAnswer = (currentValue) => predicatToString(isEven(currentValue));
  gameEngine(gameRules, whatToAsk, rightAnswer);
};

export default gameBrainEven;
