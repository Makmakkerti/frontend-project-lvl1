/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, wrongAnswer, winner, generateRandomNumber, log,
} from '../index.js';

const findGcd = (a, b) => {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  if (max % min === 0) return min;

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return 1;
};

const gcdGame = (counter, username) => {
  const description = 'Find the greatest common divisor of given numbers.';
  if (counter === 3) return winner();
  if (counter === 0) greeting(description);

  const generatedNumber1 = generateRandomNumber();
  const generatedNumber2 = generateRandomNumber();
  askQuestion(`${generatedNumber1} ${generatedNumber2}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = findGcd(generatedNumber1, generatedNumber2);

  // eslint-disable-next-line no-mixed-operators
  if (+answer === correctAnswer) {
    log('Correct!');
    return gcdGame(counter + 1, username);
  }
  return wrongAnswer(answer, correctAnswer);
};

export default gcdGame;
