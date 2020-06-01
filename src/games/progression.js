import runGameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';

const generateProgression = (start, step, length) => {
  let counter = 0;
  let element = 0;
  const progression = [];
  while (counter < length) {
    element = start + step * counter;
    progression.push(element);
    counter += 1;
  }
  return progression;
};

const replaceProgressionElement = (progression, newElement = '..') => {
  const index = getRandomInteger(1, progression.length);
  const alteredProgression = [...progression];
  const hiddenElement = progression[index];
  alteredProgression[index] = newElement;
  return [alteredProgression, hiddenElement];
};

const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = getRandomInteger(0, 100);
  const step = getRandomInteger(2, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const [alterdProgression, hiddenElement] = replaceProgressionElement(progression);
  const currentValue = alterdProgression.join(' ');
  const rightAnswer = String(hiddenElement);
  return [currentValue, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
