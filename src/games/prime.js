import { numberOfRounds } from '../index.js';

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

const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = Math.floor(Math.random() * (999 - 2) + 1);
    const isPrime = isPrimeNumber(question);
    const correctAnswer = isPrime ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

const primeGame = () => [description, generateGameData()];

export default primeGame;
