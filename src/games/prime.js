import playRound from '../index.js';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  if (num < 3) return true;
  const maxDivider = Math.round(num / 2);

  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (counter) => {
  const question = Math.floor(Math.random() * 10000);
  const isPrime = isPrimeNumber(question);
  const correctAnswer = isPrime ? 'yes' : 'no';
  playRound(primeGame, description, counter, question, correctAnswer);
};

export default primeGame;
