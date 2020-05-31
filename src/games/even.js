import gameEngine from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isEven = (integer) => (integer % 2 === 0);

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBrainEven = () => {
  const generateGameData = () => {
    const currentValue = getRandomInteger(1, 100);
    const rightAnswer = predicatToString(isEven(currentValue));
    return [currentValue, rightAnswer];
  };

  gameEngine(gameRule, generateGameData);
};

export default gameBrainEven;
