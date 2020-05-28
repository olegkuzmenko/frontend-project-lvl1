import gameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';


const generateProgression = (start, step, length) => {
  const progression = [];
  let number = start;
  for (let i = 1; i <= length; i += 1) {
    progression.push(number);
    number += step;
  }
  return progression;
};

const gameRule = 'What number is missing in the progression?';

const gameBrainProgression = () => {
  const getRoundResults = () => {
    const start = getRandomInteger(0, 100);
    const step = getRandomInteger(2, 10);
    const length = 10;
    const progression = generateProgression(start, step, length);
    const hiddenElementIndex = getRandomInteger(1, length);
    const hiddenElement = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';
    const currentValue = progression.join(' ');
    const rightAnswer = String(hiddenElement);
    return [currentValue, rightAnswer];
  };
  gameEngine(gameRule, getRoundResults);
};

export default gameBrainProgression;
