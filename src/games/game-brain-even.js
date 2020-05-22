import {
  getRandomInteger, getAnswer, predicatToString, checkAnswerString, gameEngine,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const howManyRounds = 3;

const gameBrainEven = () => {
  const currentNumber = getRandomInteger(1, 100);
  const userAnswer = getAnswer(currentNumber);
  const rightAnswer = predicatToString(isEven(currentNumber));
  const statusOfAnswer = checkAnswerString(userAnswer, rightAnswer);

  return gameEngine(howManyRounds, evenGameRules, rightAnswer, userAnswer, statusOfAnswer);
};

export default gameBrainEven();
