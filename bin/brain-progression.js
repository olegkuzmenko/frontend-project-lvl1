import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainProgression from '../src/games/game-brain-progression.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log('What number is missing in the progression?');

threeRoundGame(gameBrainProgression, userName);
