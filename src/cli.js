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

export const wrongAnswerReport = (str, name) => {
  const currentAnswer = str;
  const oppositeAnswer = '';
  const userName = name;
  if (currentAnswer === 'yes') {
    oppositeAnswer = 'no';
  } else {
    oppositeAnswer = 'yes';
  }
  console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${oppositeAnswer}".
  Let's try again, ${userName}`)
};


export const checkAnswer = (str, boolean) => {
  const booleanAnswer = true;
  if (str === 'no') {
    booleanAnswer = false;
  }
  return booleanAnswer === boolean ? true : false;
};

export const getRandomInteger = () => {
  const min = 1;
  const max = 100;
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};

export const isEven = (integer) => integer % 2 !== 0 ? false : true; 

export const roundGame = (counter, userName) => {
  if (counter > 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const currentNumber = getRandomInteger();

    const answer = getAnswer(currentNumber);

    const rightAnswer = isEven(currentNumber)

    const statusOfAnswer = checkAnswer(answer, rightAnswer);

    if (statusOfAnswer === true) {
      console.log('Correct!');
      return roundGame(counter - 1);
    }
    return wrongAnswerReport(answer, userName);
  }
};
