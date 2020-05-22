import {
  getRandomInteger, getAnswer, predicatToString, checkAnswerString,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const gameBrainEven = () => {
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
