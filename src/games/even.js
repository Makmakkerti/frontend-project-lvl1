import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = Math.floor(Math.random() * (100));
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [description, question, correctAnswer];
};

const evenGame = (counter) => {
  const gameData = generateGameData();
  playGame(evenGame, counter + 1, ...gameData);
};

export default evenGame;
