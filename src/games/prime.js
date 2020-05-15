import generateNumberInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const maxDivider = Math.sqrt(num);
  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateGameData = () => {
  const question = generateNumberInRange(1, 999);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => [description, generateGameData()];

export default primeGame;
