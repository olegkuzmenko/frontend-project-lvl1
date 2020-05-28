
import readlineSync from 'readline-sync';

const gameEngine = (gameRule, getRoundResults) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  let roundResult = true;
  const howManyRounds = 3;
  for (let i = howManyRounds; i > 0 && roundResult === true; i -= 1) {
    const [questionValue, rightAnswer] = getRoundResults();
    const userAnswer = readlineSync.question(`Question: ${questionValue}\nYour answer: `);
    roundResult = userAnswer === rightAnswer;
    if (roundResult !== true) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
