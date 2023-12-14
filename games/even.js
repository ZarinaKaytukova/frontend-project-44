#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min));
let correctAnswer = 0;
const evenGame = () => {
  console.log(greeting());
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 20);
    console.log(number);
    const isEven = (num) => num % 2 === 0;
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(' ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswer += 1;
    } else {
      console.log(`'${number}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'no' : 'yes'}'.`);
      console.log("Let's try again, !");
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log('Congratulations');
  }
};
export default evenGame;
console.log(evenGame());
