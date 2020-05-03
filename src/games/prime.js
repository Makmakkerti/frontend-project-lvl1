/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, wrongAnswer, winner, log,
} from '../index.js';

const isPrimeNumber = (num) => {
  if (num <= 0 || num === 1) return false;
  if (num === 2 || num === 3) return true;

  const maxDivider = Math.round(num / 2);
  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGame = (counter, username) => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  if (counter === 3) return winner();
  if (counter === 0) greeting(description);

  const generatedNumber = Math.floor(Math.random() * 10000);
  askQuestion(`${generatedNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const isPrime = isPrimeNumber(generatedNumber);
  const correctAnswer = isPrime ? 'yes' : 'no';

  // eslint-disable-next-line no-mixed-operators
  if (answer === 'yes' && isPrime || answer === 'no' && !isPrime) {
    log('Correct!');
    return primeGame(counter + 1, username);
  }
  return wrongAnswer(answer, correctAnswer);
};

export default primeGame;
