import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (generateGameData) => {
  const [description] = generateGameData();
  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
  console.log(description);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [, roundData] = generateGameData();
    const [question, correctAnswer] = roundData;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};

export default startGame;
