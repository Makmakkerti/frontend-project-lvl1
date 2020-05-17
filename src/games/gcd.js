import { generateNumberInRange } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2).toString();
  return [question, answer];
};

const gcdGame = () => [description, generateGameData()];
export default gcdGame;
