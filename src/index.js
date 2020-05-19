import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getAnswer = (expression) => {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  return answer;
};

export const wrongAnswerReport = (userAnswer, userName, rightAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
  Let's try again, ${userName}`);
};


export const checkAnswerString = (userAnswer, rightAnswer) => {
  const answers = ['yes', 'no'];
  if (!answers.includes(userAnswer)) {
    return false;
  }
  return userAnswer === rightAnswer;
};

export const checkAnswerInteger = (userAnswer, rightAnswer) => (userAnswer === rightAnswer);

export const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const isEven = (integer) => (integer % 2 === 0 ? 'yes' : 'no');

export const threeRoundGame = (foo, userName) => foo(3, userName);

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, 3)];
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  let randomExpression = '';
  let answer = 0;
  const answers = {};
  if (operator === '+') {
    randomExpression = `${firstNumber} + ${secondNumber}`;
    answer = firstNumber + secondNumber;
  }
  if (operator === '-') {
    randomExpression = `${firstNumber} - ${secondNumber}`;
    answer = firstNumber - secondNumber;
  }
  if (operator === '*') {
    randomExpression = `${firstNumber} * ${secondNumber}`;
    answer = firstNumber * secondNumber;
  }
  answers.expression = randomExpression;
  answers.answer = String(answer);
  return answers;
};
