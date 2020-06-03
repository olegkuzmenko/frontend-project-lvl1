import runGameEngine from '../index.js';
import { getRandomInteger } from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let counter = 0; counter < length; counter += 1) {
    progression.push(start + step * counter);
  }
  return progression;
};

const replaceArrayElement = (array, index, newElement = '..') => {
  const alteredProgression = [...array];
  const hiddenElement = array[index];
  alteredProgression[index] = newElement;
  return [alteredProgression, hiddenElement];
};

const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = getRandomInteger(0, 100);
  const step = getRandomInteger(2, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = getRandomInteger(1, progression.length);
  const [alterdProgression, hiddenElement] = replaceArrayElement(progression, hiddenElementIndex);
  const question = alterdProgression.join(' ');
  const rightAnswer = String(hiddenElement);
  return [question, rightAnswer];
};

export default () => runGameEngine(gameRule, generateGameData);
