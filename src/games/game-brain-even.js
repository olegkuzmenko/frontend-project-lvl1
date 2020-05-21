import {
  checkAnswerString, getRandomInteger, getAnswer, isEven, wrongAnswerReport, predicatToString,
} from '../index.js';

const gameBrainEven = (counter, userName) => {
  if (counter > 0) {
    const currentNumber = getRandomInteger(1, 100);

    const userAnswer = getAnswer(currentNumber);

    const rightAnswer = predicatToString(isEven(currentNumber));

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
