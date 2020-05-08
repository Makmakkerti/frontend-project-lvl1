import playRound from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = (counter) => {
  const generatedNumber = Math.floor(Math.random() * (100));
  const question = `${generatedNumber}`;
  const isEven = generatedNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  playRound(evenGame, description, counter, question, correctAnswer);
};

export default evenGame;
