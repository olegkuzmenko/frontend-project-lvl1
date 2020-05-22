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

  const result = [];
  result[0] = userAnswer;
  result[1] = rightAnswer;
  result[2] = statusOfAnswer;
  return result;
};

export default gameBrainEven;
