/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

let username;
export const numberOfRounds = 3;

const playGame = (game) => {
  const description = game[0];
  const gameData = game[1];

  console.log('Welcome to Brain Games!');
  username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = gameData[i][0];
    const correctAnswer = gameData[i][1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === gameData[i][1].toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Let's try again, ${username}!`);
    }
  }
  return console.log(`Congratulations, ${username}`);
};

export default playGame;
