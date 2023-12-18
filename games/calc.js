#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min));

const calcGame = () => {
  console.log(greeting());
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const question = number + number || number - number || number * number;
    console.log(`Question: ${question}`);
    const expectedAnswer = question;
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {

    }
  }
};
export default calcGame;
console.log(calcGame());
