import {
  checkAnswer, getRandomInteger, getAnswer, isEven, wrongAnswerReport,
} from '../cli.js';


const gameBrainEven = (counter, userName) => {
  if (counter > 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const currentNumber = getRandomInteger();

    const answer = getAnswer(currentNumber);

    const rightAnswer = isEven(currentNumber);

    const statusOfAnswer = checkAnswer(answer, rightAnswer);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(answer, userName, rightAnswer);
    }
    console.log('Correct!');
    return gameBrainEven(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainEven;
