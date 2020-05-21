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

export const isEven = (integer) => (integer % 2 === 0);

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

export const getTwoRandomIntegers = () => {
  const twoRandomIntegers = {};
  twoRandomIntegers.first = getRandomInteger(1, 100);
  twoRandomIntegers.second = getRandomInteger(1, 100);
  return twoRandomIntegers;
};

export const getGreatestCommonDevisor = (firstNumber, secondNumber) => {
  let devisor = 0;
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    devisor = secondNumber;
  } else {
    devisor = firstNumber;
  }

  for (let gratestDevisor = devisor; gratestDevisor > 0; gratestDevisor -= 1) {
    if (firstNumber % gratestDevisor === 0 && secondNumber % gratestDevisor === 0) {
      return String(gratestDevisor);
    }
  }
};

export const getProgression = () => {
  const step = getRandomInteger(1, 10);
  const largeProgression = [];
  let smallProgression = [];
  let hiddenElementIndex = 0;
  let hiddenElement = 0;
  const result = {};
  for (let i = 0; i <= 100; i += step) {
    largeProgression.push(i);
  }
  const begin = getRandomInteger(0, largeProgression.length - 10);
  const end = begin + 10;
  smallProgression = largeProgression.slice(begin, end);
  hiddenElementIndex = getRandomInteger(1, 10);
  hiddenElement = smallProgression[hiddenElementIndex];
  smallProgression[hiddenElementIndex] = '..';
  result.progression = smallProgression.join(' ');
  result.element = String(hiddenElement);
  return result;
};

export const predicatToString = (boolean) => (boolean ? 'yes' : 'no');

export const isPrime = (integer) => {
  if (integer === 2) {
    return true;
  }
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return true;
};
