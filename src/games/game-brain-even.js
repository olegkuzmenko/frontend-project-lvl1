import {
  getRandomInteger, getAnswer, predicatToString,
} from '../index.js';

const isEven = (integer) => (integer % 2 === 0);

const gameBrainEven = () => {
  const currentNumber = getRandomInteger(1, 100);
  const userAnswer = getAnswer(currentNumber);
  const rightAnswer = predicatToString(isEven(currentNumber));

  const answers = [];
  answers[0] = userAnswer;
  answers[1] = rightAnswer;
  return answers;
};

export default gameBrainEven;
