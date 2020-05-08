import readlineSync from 'readline-sync';

let username;
const numberOfRounds = 3;

const playRound = (gameType, description, counter = 0, question, correctAnswer) => {
  if (counter === numberOfRounds) return console.log(`Congratulations, ${username}`);
  if (counter === 0) {
    console.log('Welcome to Brain Games!');
    username = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${username}!`);
    console.log(description);
  }

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    return gameType(counter + 1);
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return console.log(`Let's try again, ${username}!`);
};

export default playRound;
