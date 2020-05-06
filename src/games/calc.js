import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep,
  generateRandomNumber, generateSign, calculateOperation,
} from '../index.js';

const description = 'What is the result of the expression?';

const calcGame = (counter) => {
  greeting(counter, description);
  const generatedNumber1 = generateRandomNumber();
  const generatedNumber2 = generateRandomNumber();
  const operator = generateSign(generateRandomNumber());

  askQuestion(`${generatedNumber1} ${operator} ${generatedNumber2}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = calculateOperation(operator, generatedNumber1, generatedNumber2);
  nextStep(calcGame, answer, correctAnswer, counter);
};

export default calcGame;
