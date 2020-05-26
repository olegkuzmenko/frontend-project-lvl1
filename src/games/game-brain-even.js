import { gameEngine } from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';

const isEven = (integer) => (integer % 2 === 0);


const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game = () => {
    const values = [];
    const currentValue = getRandomInteger(1, 100);
    const rightAnswer = predicatToString(isEven(currentValue));
    values[0] = currentValue;
    values[1] = rightAnswer;
    return values;
  };

  gameEngine(gameRules, game);
};

export default gameBrainEven;
