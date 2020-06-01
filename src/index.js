
import readlineSync from 'readline-sync';

const runGameEngine = (gameRule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  for (let howManyRounds = 0; howManyRounds < 3; howManyRounds += 1) {
    const [questionValue, rightAnswer] = generateGameData();
    console.log(`Question: ${questionValue}`);
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

export default runGameEngine;
