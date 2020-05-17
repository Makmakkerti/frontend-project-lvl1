import { generateNumberInRange } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const maxDivider = Math.sqrt(num);
  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateGameData = () => {
  const num = generateNumberInRange(1, 999);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => [description, generateGameData()];

export default primeGame;
