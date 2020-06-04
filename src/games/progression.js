import runEngine from '../index.js';
import { generateRandomInteger } from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let counter = 0; counter < length; counter += 1) {
    progression.push(start + step * counter);
  }
  return progression;
};

const replaceArrayElement = (array, index, newElement = '..') => {
  const alteredArray = [...array];
  alteredArray[index] = newElement;
  return alteredArray;
};

const gameRule = 'What number is missing in the progression?';

const generateGameData = () => {
  const start = generateRandomInteger(0, 100);
  const step = generateRandomInteger(2, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = generateRandomInteger(1, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  const processedProgression = replaceArrayElement(progression, hiddenElementIndex);
  const question = processedProgression.join(' ');
  const rightAnswer = String(hiddenElement);
  return [question, rightAnswer];
};

export default () => runEngine(gameRule, generateGameData);
