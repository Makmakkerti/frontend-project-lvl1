/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, wrongAnswer, winner, generateRandomNumber, log,
} from '../index.js';

const generateSign = (rand) => {
  if (rand < 33) return '+';
  if (rand > 33 && rand < 67) return '-';
  return '*';
};

const calcGame = (counter, username) => {
  if (counter === 3) return winner();
  const description = 'What is the result of the expression?';
  if (counter === 0) greeting(description);

  // Generate random number 0-100
  const generatedNumber1 = generateRandomNumber();
  const generatedNumber2 = generateRandomNumber();
  const operator = generateSign(generateRandomNumber());

  askQuestion(`${generatedNumber1} ${operator} ${generatedNumber2}`);

  const answer = readlineSync.question('Your answer: ');
  let correctAnswer;

  if (operator === '+') {
    correctAnswer = generatedNumber1 + generatedNumber2;
  } else if (operator === '-') {
    correctAnswer = generatedNumber1 - generatedNumber2;
  } else if (operator === '*') {
    correctAnswer = generatedNumber1 * generatedNumber2;
  }

  // eslint-disable-next-line no-mixed-operators
  if (+answer === correctAnswer) {
    log('Correct!');
    calcGame(counter + 1, username);
  } else {
    wrongAnswer(answer, correctAnswer);
  }
};

export default calcGame;
