import {
  getProgression, checkAnswerInteger, getAnswer, wrongAnswerReport,
} from '../index.js';

const gameBrainProgression = (counter, userName) => {
  if (counter > 0) {
    const result = getProgression();

    const userAnswer = getAnswer(result.progression);

    const statusOfAnswer = checkAnswerInteger(userAnswer, result.element);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, result.element);
    }
    console.log('Correct!');
    return gameBrainProgression(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainProgression;
