import { gameEngine } from '../index.js';
import { getRandomInteger, predicatToString } from '../utils.js';




const gameBrainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game = () => {
    const values = {};
    const currentValue = getRandomInteger(1, 100);
    const isEven = (integer) => (integer % 2 === 0);
    const rightAnswer = predicatToString(isEven(currentValue));
    values.expression = currentValue;
    values.answer = rightAnswer;
    return values;
  }
  
  gameEngine(gameRules, game);
};

export default gameBrainEven;
