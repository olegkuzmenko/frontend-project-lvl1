#!/usr/bin/env node

import { askUserName, roundGame } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = askUserName();

const counter = 3;

roundGame(counter, userName);
