import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (generateGameData) => {
  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name?: ');

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [description, [question, answer]] = generateGameData();

    if (i === 0) {
      console.log(`Hello, ${username}!`);
      console.log(description);
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};

export default startGame;
