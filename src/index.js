
import readlineSync from 'readline-sync';

const roundCounter = 3;

const runEngine = (gameRule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  for (let i = 1; i <= roundCounter; i += 1) {
    const [question, rightAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
