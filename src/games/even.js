/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, wrongAnswer, winner, generateRandomNumber, log,
} from '../index.js';

const evenGame = (counter, username) => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  if (counter === 3) return winner();
  if (counter === 0) greeting(description);

  const generatedNumber = generateRandomNumber();
  askQuestion(`${generatedNumber}`);

  const answer = readlineSync.question('Your answer: ');
  const isEven = generatedNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  // eslint-disable-next-line no-mixed-operators
  if (answer === 'yes' && isEven || answer === 'no' && !isEven) {
    log('Correct!');
    return evenGame(counter + 1, username);
  }
  return wrongAnswer(answer, correctAnswer);
};

export default evenGame;
