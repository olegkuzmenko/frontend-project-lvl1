import {
  getTwoRandomIntegers, getGreatestCommonDevisor, checkAnswerInteger, getAnswer, wrongAnswerReport,
} from '../index.js';

const gameBrainGcd = (counter, userName) => {
  if (counter > 0) {
    const twoRandomIntegers = getTwoRandomIntegers();

    const { first, second } = twoRandomIntegers;

    const userAnswer = getAnswer((`${first} ${second}`));

    const statusOfAnswer = checkAnswerInteger(userAnswer, getGreatestCommonDevisor(first, second));

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, getGreatestCommonDevisor(first, second));
    }
    console.log('Correct!');
    return gameBrainGcd(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainGcd;
