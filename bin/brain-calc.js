#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index_old.js';
import gameBrainCalc from '../src/games/game-brain-calc.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log('What is the result of the expression?');

threeRoundGame(gameBrainCalc, userName);
