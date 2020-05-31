import gameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';


const generateProgression = (start, step, length, acc = []) => {
  if (length === 0) {
    return acc;
  }
  const item = start + step * (length - 1);
  acc.unshift(item);
  return generateProgression(start, step, length - 1, acc);
};

const hideProgressionElement = (progression, index = getRandomInteger(1, progression.length)) => {
  const alteredProgression = [...progression];
  const hiddenElement = progression[index];
  alteredProgression[index] = '..';
  return [alteredProgression, hiddenElement];
};

const gameRule = 'What number is missing in the progression?';

const gameBrainProgression = () => {
  const generateGameData = () => {
    const start = getRandomInteger(0, 100);
    const step = getRandomInteger(2, 10);
    const length = 10;
    const progression = generateProgression(start, step, length);
    const [alterdProgression, hiddenElement] = hideProgressionElement(progression);
    const currentValue = alterdProgression.join(' ');
    const rightAnswer = String(hiddenElement);
    return [currentValue, rightAnswer];
  };
  gameEngine(gameRule, generateGameData);
};

export default gameBrainProgression;
