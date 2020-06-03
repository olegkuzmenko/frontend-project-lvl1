import runGameEngine from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isEven = (integer) => (integer % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomInteger(1, 100);
  const rightAnswer = predicatToString(isEven(question));
  return [question, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
