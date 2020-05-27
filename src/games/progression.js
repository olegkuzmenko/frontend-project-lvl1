import { gameEngine } from '../index.js';
import { getRandomInteger } from '../utils.js';


const getProgression = (lastNumber, step) => {
  const progression = [];
  for (let i = 0; i <= lastNumber; i += step) {
    progression.push(i);
  }
  return progression;
};

const getSliceOfProgression = (progression, length) => {
  let slice = [];
  const begin = getRandomInteger(0, progression.length - length);
  const end = begin + length;
  slice = progression.slice(begin, end);
  return slice;
};


const gameBrainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const game = () => {
    const values = [];
    const progression = getProgression(100, getRandomInteger(1, 10));
    const sliceOfProgression = getSliceOfProgression(progression, 10);
    const hiddenElementIndex = getRandomInteger(1, 10);
    const hiddenElement = sliceOfProgression[hiddenElementIndex];
    sliceOfProgression[hiddenElementIndex] = '..';
    values[0] = sliceOfProgression.join(' ');
    values[1] = String(hiddenElement);
    return values;
  };
  gameEngine(gameRules, game);
};

export default gameBrainProgression;
