/* eslint-disable no-restricted-syntax */
import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

const playGame = (game) => {
  const [description, gameData] = game();

  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (const roundData of gameData) {
    const [question, correctAnswer] = roundData;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer.toString()) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};

export default playGame;
