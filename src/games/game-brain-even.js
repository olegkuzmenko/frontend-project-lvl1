import {
  getRandomInteger, predicatToString, gameEngine,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const whatToAsk = () => getRandomInteger(1, 100);
  const rightAnswer = () => predicatToString(isEven(whatToAsk));
  gameEngine(gameRules, whatToAsk, rightAnswer);
};

export default gameBrainEven;
