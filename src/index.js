import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getAnswer = (integer) => {
  const answer = readlineSync.question(`Question: ${integer}\nYour answer: `);
  return answer;
};

export const wrongAnswerReport = (str, name, rightAnswer) => {
  const currentAnswer = str;
  let oppositeAnswer = '';
  if (rightAnswer) {
    oppositeAnswer = 'yes';
  } else {
    oppositeAnswer = 'no';
  }
  const userName = name;
  console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${oppositeAnswer}".
  Let's try again, ${userName}`);
};


export const checkAnswer = (str, boolean) => {
  const answers = ['yes', 'no'];
  if (!answers.includes(str)) {
    return false;
  }
  let booleanAnswer = true;
  if (str !== 'yes') {
    booleanAnswer = false;
  }
  return booleanAnswer === boolean;
};

export const getRandomInteger = () => {
  const min = 1;
  const max = 100;
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const isEven = (integer) => (integer % 2 === 0);


export const threeRoundGame = (foo, userName) => foo(3, userName);
