import { generateNumberInRange } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const stringifyBooleanToAnswer = (bool) => (bool ? 'yes' : 'no');

const evenGame = () => {
  const question = generateNumberInRange(1, 100);
  const answer = stringifyBooleanToAnswer(isEven(question));
  return [description, [question, answer]];
};

export default evenGame;
