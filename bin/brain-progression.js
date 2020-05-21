import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainProgression from '../src/games/game-brain-progression.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

threeRoundGame(gameBrainProgression, userName);