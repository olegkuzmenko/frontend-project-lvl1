import {
  checkAnswerInteger, getRandomExpression, getAnswer, wrongAnswerReport,
} from '../index.js';
import gameBrainEven from './game-brain-even.js';

const gameBrainCalc = (counter, userName) => {
  if (counter > 0) {
    console.log('What is the result of the expression?');

    const randomeExpression = getRandomExpression();

    const userAnswer = getAnswer(randomeExpression.expression);

    const statusOfAnswer = checkAnswerInteger(userAnswer, randomeExpression.answer);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, randomeExpression.answer);
    }
    console.log('Correct!');
    return gameBrainEven(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainCalc;
