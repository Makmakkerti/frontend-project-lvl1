import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep, generateRandomNumber,
} from '../index.js';

const findGcd = (a, b) => {
  let min = 0;
  let max = 0;

  if (a > b) {
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }

  if (max % min === 0) return min;

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0) {
      if (min % i === 0) {
        return i;
      }
    }
  }
  return 1;
};

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
