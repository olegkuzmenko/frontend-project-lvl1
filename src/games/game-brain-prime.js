import {
  checkAnswerString, getRandomInteger, getAnswer, isPrime, wrongAnswerReport, predicatToString,
} from '../index.js';

const gameBrainPrime = (counter, userName) => {
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  if (counter > 0) {

    const currentNumber = getRandomInteger(1, 1000);

    const userAnswer = getAnswer(currentNumber);

    const rightAnswer = predicatToString(isPrime(currentNumber));

    const statusOfAnswer = checkAnswerString(userAnswer, rightAnswer);

    if (statusOfAnswer !== true) {
      return wrongAnswerReport(userAnswer, userName, rightAnswer);
    }
    console.log('Correct!');
    return gameBrainPrime(counter - 1, userName);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBrainPrime;
