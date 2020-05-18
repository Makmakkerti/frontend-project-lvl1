import { generateNumberInRange } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = generateNumberInRange(1, 100);
  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => [description, generateGameData()];
export default evenGame;
