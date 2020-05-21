#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainPrime from '../src/games/game-brain-prime.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

console.log('Answer "yes" if the number is prime, otherwise answer "no".');

threeRoundGame(gameBrainPrime, userName);
