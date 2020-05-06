import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep, generateRandomNumber, findGcd,
} from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = (counter) => {
  greeting(counter, description);
  const generatedNumber1 = generateRandomNumber();
  const generatedNumber2 = generateRandomNumber();
  askQuestion(`${generatedNumber1} ${generatedNumber2}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = findGcd(generatedNumber1, generatedNumber2);
  nextStep(gcdGame, answer, correctAnswer, counter);
};

export default gcdGame;
