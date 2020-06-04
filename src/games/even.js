import runEngine from '../index.js';
import { generateRandomInteger, booleanToStringAnswer } from '../utils.js';

const isEven = (integer) => (integer % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = generateRandomInteger(1, 100);
  const rightAnswer = booleanToStringAnswer(isEven(question));
  return [question, rightAnswer];
};

export default () => runEngine(gameRule, generateGameData);
