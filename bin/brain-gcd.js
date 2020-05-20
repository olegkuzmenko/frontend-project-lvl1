#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainGcd from '../src/games/game-brain-gcd.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

threeRoundGame(gameBrainGcd, userName);