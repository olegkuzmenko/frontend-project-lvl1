import {
  getRandomInteger, getAnswer, predicatToString, printGameRules, checkAnswerString,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBrainEven = () => {
  printGameRules(evenGameRules);

  const currentNumber = getRandomInteger(1, 100);
  const userAnswer = getAnswer(currentNumber);
  const rightAnswer = predicatToString(isEven(currentNumber));
  const statusOfAnswer = checkAnswerString(userAnswer, rightAnswer);

  const results = [];
  results[0] = userAnswer;
  results[1] = rightAnswer;
  results[2] = statusOfAnswer;
  return results;
};

export default gameBrainEven;
