#!/usr/bin/env node

import { askUserName, threeRoundGame } from '../src/index.js';
import gameBrainPrime from '../src/games/game-brain-prime.js';

console.log('Welcome to the Brain Games!');

const userName = askUserName();

threeRoundGame(gameBrainPrime, userName);
