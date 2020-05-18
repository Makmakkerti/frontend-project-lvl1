import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (generateGameData) => {
  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name?: ');

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [description, [question, correctAnswer]] = generateGameData();

    if (i === 0) {
      console.log(`Hello, ${username}!`);
      console.log(description);
    }

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
