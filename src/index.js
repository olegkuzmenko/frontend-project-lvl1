
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

export const getAnswer = (expression) => {
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  return answer;
};

export const checkAnswerString = (userAnswer, rightAnswer) => {
  const answers = ['yes', 'no'];
  if (!answers.includes(userAnswer)) {
    return false;
  }
  return userAnswer === rightAnswer;
};

export const wrongAnswerReport = (userAnswer, userName, rightAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".
  Let's try again, ${userName}`);
};

export const predicatToString = (boolean) => (boolean ? 'yes' : 'no');

export const rightAnswerReport = () => console.log('Correct!');

export const winningReport = (userName) => console.log(`Congratulations, ${userName}!`);

export const printGameRules = (gameRules) => console.log(gameRules);

export const gameEngine = (game) => {
  const userName = startGame();
  const howManyRounds = 3;
  let results = {};
  let gameResult = true;
  for (let i = howManyRounds; i > 0 || gameResult === true; i -= 1) {
    results = game();
    const { userAnswer, rightAnswer, statusOfAnswer } = results;
    gameResult = statusOfAnswer;
    if (gameResult !== true) {
      wrongAnswerReport(userAnswer, userName, rightAnswer);
      return;
    }
    rightAnswerReport();
  }
  winningReport(userName);
};
