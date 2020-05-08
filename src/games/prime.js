import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep,
} from '../index.js';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  if (num < 3) return true;
  const maxDivider = Math.round(num / 2);

  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (counter) => {
  greeting(counter, description);
  const generatedNumber = Math.floor(Math.random() * 10000);
  askQuestion(`${generatedNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const isPrime = isPrimeNumber(generatedNumber);
  const correctAnswer = isPrime ? 'yes' : 'no';
  nextStep(primeGame, answer, correctAnswer, counter);
};

export default primeGame;
