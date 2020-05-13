import { numberOfRounds } from '../index.js';

const findGcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const generatedNumber1 = Math.floor(Math.random() * (100));
    const generatedNumber2 = Math.floor(Math.random() * (100));
    const question = `${generatedNumber1} ${generatedNumber2}`;
    const correctAnswer = findGcd(generatedNumber1, generatedNumber2);
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

const gcdGame = () => [description, generateGameData()];

export default gcdGame;
