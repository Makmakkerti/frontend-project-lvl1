import { generateNumberInRange, checkBooleanAnswer } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const question = generateNumberInRange(1, 100);
  const correctAnswer = checkBooleanAnswer(isEven(question));
  return [description, [question, correctAnswer]];
};

export default evenGame;
