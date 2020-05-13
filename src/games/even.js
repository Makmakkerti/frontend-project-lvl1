import { numberOfRounds } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = Math.floor(Math.random() * (100));
    const isEven = question % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

const evenGame = () => [description, generateGameData()];

export default evenGame;
