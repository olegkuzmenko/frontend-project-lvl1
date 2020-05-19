#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainCalc from '../src/games/game-brain-calc.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

threeRoundGame(gameBrainCalc, userName);
