/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const { log } = console;
/* Question about one var probem from linter.
   Why not good to use "let username, answer, counter = 0"? */
let username;
let answer;
let counter = 0;

export default () => {
  log('Welcome to Brain Games!');
  username = readlineSync.question('May I have your name?: ');
  log(`Hello, ${username}!`);
};

export const evenGame = () => {
  // If third correct answer, user won
  if (counter === 3) {
    log(`Congratulations, ${username}!`);
    return;
  }

  // Generate random number 0-100
  const generatedNumber = Math.floor(Math.random() * (100));
  if (counter === 0) log('Answer "yes" if the number is even, otherwise answer "no".');

  log(`Question: ${generatedNumber}`);
  answer = readlineSync.question('Your answer: ');
  const isEven = generatedNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  // eslint-disable-next-line no-mixed-operators
  if (answer === 'yes' && isEven || answer === 'no' && !isEven) {
    log('Correct!');
    counter += 1;
    evenGame();
  } else {
    log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    log(`Let's try again, ${username}!`);
  }
};
