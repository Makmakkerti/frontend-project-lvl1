import playGame from '../index.js';

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
  const generatedNumber1 = Math.floor(Math.random() * (100));
  const generatedNumber2 = Math.floor(Math.random() * (100));
  const question = `${generatedNumber1} ${generatedNumber2}`;
  const correctAnswer = findGcd(generatedNumber1, generatedNumber2);
  return [description, question, correctAnswer];
};

const gcdGame = (counter) => {
  const gameData = generateGameData();
  playGame(gcdGame, counter + 1, ...gameData);
};

export default gcdGame;
