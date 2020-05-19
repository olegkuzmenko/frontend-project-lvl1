#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainEven from '../src/games/game-brain-even.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

threeRoundGame(gameBrainEven, userName);
