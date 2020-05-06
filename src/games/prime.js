import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep, isPrimeNumber,
} from '../index.js';

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
