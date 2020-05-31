
import readlineSync from 'readline-sync';

const gameEngine = (gameRule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  const howManyRounds = 3;
  for (let i = howManyRounds; i > 0; i -= 1) {
    const [questionValue, rightAnswer] = generateGameData();
    const userAnswer = readlineSync.question(`Question: ${questionValue}\nYour answer: `);
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
