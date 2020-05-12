import { numberOfRounds } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = Math.floor(Math.random() * (100));
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => {
  const gameData = [];
  for (let i = 0; i <= numberOfRounds; i += 1) {
    gameData.push(generateGameData());
  }
  return [description, gameData];
};

export default evenGame;
