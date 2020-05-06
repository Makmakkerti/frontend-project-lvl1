import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, generateRandomNumber, nextStep,
} from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = (counter) => {
  greeting(counter, description);
  const generatedNumber = generateRandomNumber();
  askQuestion(`${generatedNumber}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = generatedNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  nextStep(evenGame, answer, correctAnswer, counter);
};

export default evenGame;
