// общая часть
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min));

let correctAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  if (expectedAnswer === userAnswer) {
    console.log('Correct!');
    correctAnswer += 1;
  } else {
    console.log("Let's try again!");
  }
  if (correctAnswer === 3) {
    console.log('Congratulations');
  }
}