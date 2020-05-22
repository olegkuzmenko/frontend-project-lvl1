import {
  checkAnswerInteger, getRandomExpression, getAnswer, wrongAnswerReport,
} from '../index_old.js';

const gameBrainCalc = (counter, userName) => {
  if (counter > 0) {
    const randomeExpression = getRandomExpression();

    const userAnswer = getAnswer(randomeExpression.expression);

    const statusOfAnswer = checkAnswerInteger(userAnswer, randomeExpression.answer);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, randomeExpression.answer);
    }
    console.log('Correct!');
    return gameBrainCalc(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainCalc;
