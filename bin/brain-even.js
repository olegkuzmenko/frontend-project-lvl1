#!/usr/bin/env node

import { gameEngine } from '../src/index.js';
import gameBrainEven from '../src/games/game-brain-even.js';

const howManyRounds = 3;

gameEngine(gameBrainEven, howManyRounds);
