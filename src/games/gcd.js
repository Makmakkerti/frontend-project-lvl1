import playRound from '../index.js';

const findGcd = (a, b) => {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  if (max % min === 0) return min;

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0) {
      if (min % i === 0) {
        return i;
      }
    }
  }
  return 1;
};

const description = 'Find the greatest common divisor of given numbers.';

const gcdGame = (counter) => {
  const generatedNumber1 = Math.floor(Math.random() * (100));
  const generatedNumber2 = Math.floor(Math.random() * (100));
  const question = `${generatedNumber1} ${generatedNumber2}`;
  const correctAnswer = findGcd(generatedNumber1, generatedNumber2);
  playRound(gcdGame, description, counter, question, correctAnswer);
};

export default gcdGame;
