
import readlineSync from 'readline-sync';

export const checkAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

export const gameEngine = (gameRules, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRules);
  let gameResult = true;
  const howManyRounds = 3;
  for (let i = howManyRounds; i > 0 && gameResult === true; i -= 1) {
    const values = game();
    const currentValue = values[0];
    const userAnswer = readlineSync.question(`Question: ${currentValue}\nYour answer: `);
    const rightAnswer = values[1];
    gameResult = checkAnswer(userAnswer, rightAnswer);
    if (gameResult !== true) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
