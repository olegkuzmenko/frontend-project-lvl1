#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainGcd from '../src/games/game-brain-gcd.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log('Find the greatest common divisor of given numbers.');

threeRoundGame(gameBrainGcd, userName);
