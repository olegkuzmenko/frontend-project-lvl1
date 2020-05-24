
import readlineSync from 'readline-sync';

export const sayWellcome = () => console.log('Welcome to the Brain Games!');

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const sayHello = (userName) => console.log(`Hello ${userName}`);

const startGame = () => {
  sayWellcome();
  const userName = askUserName();
  sayHello(userName);
  return userName;
};

export const chooseGameRules = (gameName) => {
  if (gameName === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
};

export const getRandomInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const getAnswer = (expression) => {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  return answer;
};

export const wrongAnswerReport = (userAnswer, userName, rightAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
  Let's try again, ${userName}`);
};

export const predicatToString = (boolean) => (boolean ? 'yes' : 'no');

export const rightAnswerReport = () => console.log('Correct!');

export const winningReport = (userName) => console.log(`Congratulations, ${userName}!`);

export const checkAnswerString = (userAnswer, rightAnswer) => {
  const answers = ['yes', 'no'];
  if (!answers.includes(userAnswer)) {
    return false;
  }
  return userAnswer === rightAnswer;
};

export const gameEngine = (gameFunc, howManyRounds, gameName) => {
  const userName = startGame();
  chooseGameRules(gameName);
  let gameResult = true;
  for (let i = howManyRounds; i > 0 && gameResult === true; i -= 1) {
    const [userAnswer, rightAnswer] = gameFunc();
    gameResult = checkAnswerString(userAnswer, rightAnswer);
    if (gameResult !== true) {
      wrongAnswerReport(userAnswer, userName, rightAnswer);
      return;
    }
    rightAnswerReport();
  }
  winningReport(userName);
};
