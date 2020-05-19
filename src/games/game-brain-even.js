import {
  checkAnswerString, getRandomInteger, getAnswer, isEven, wrongAnswerReport,
} from '../index.js';

const gameBrainEven = (counter, userName) => {
  if (counter > 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const currentNumber = getRandomInteger(1, 100);

    const userAnswer = getAnswer(currentNumber);

    const rightAnswer = isEven(currentNumber);

    const statusOfAnswer = checkAnswerString(userAnswer, rightAnswer);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, rightAnswer);
    }
    console.log('Correct!');
    return gameBrainEven(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainEven;