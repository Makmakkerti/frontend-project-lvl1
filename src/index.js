/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const { log } = console;
/* Question about one var problem from linter.
   Why not good to use "let username, answer, counter = 0"? */
let username;

const greeting = (description) => {
  log('Welcome to Brain Games!');
  username = readlineSync.question('May I have your name?: ');
  log(`Hello, ${username}!`);
  log(description);
};

const askQuestion = (q) => {
  log(`Question: ${q}`);
};

const wrongAnswer = (wrong, correct) => {
  log(`"${wrong}" is wrong answer ;(. Correct answer was "${correct}".`);
  log(`Let's try again, ${username}!`);
};

const winner = () => {
  log(`Congratulations, ${username}`);
};

const generateRandomNumber = () => Math.floor(Math.random() * (100));

const game = (gameType) => {
  gameType(0, username);
};

export {
  greeting, askQuestion, wrongAnswer, winner, game, generateRandomNumber, log,
};
