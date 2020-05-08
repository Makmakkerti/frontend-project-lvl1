import readlineSync from 'readline-sync';

let username;
const numberOfRounds = 3;

// General Functions
const runGame = (gameType, counter = 0) => {
  if (counter === numberOfRounds) return console.log(`Congratulations, ${username}`);
  return gameType(counter);
};

const greeting = (counter, description) => {
  if (counter === 0) {
    console.log('Welcome to Brain Games!');
    username = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${username}!`);
    console.log(description);
  }
};

const askQuestion = (q) => {
  console.log(`Question: ${q}`);
};

const wrongAnswer = (wrong, correct) => {
  console.log(`"${wrong}" is wrong answer ;(. Correct answer was "${correct}".`);
  console.log(`Let's try again, ${username}!`);
};

const nextStep = (gameType, answer, correctAnswer, counter) => {
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    return runGame(gameType, counter + 1);
  }
  return wrongAnswer(answer, correctAnswer);
};

const generateRandomNumber = () => Math.floor(Math.random() * (100));

export {
  runGame, greeting, askQuestion, nextStep, generateRandomNumber,
};
