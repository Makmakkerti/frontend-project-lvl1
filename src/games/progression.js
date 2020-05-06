import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep, generateRandomNumber, progressionArrayGenerator,
  progressionFromArray,
} from '../index.js';

const description = 'What number is missing in the progression?';

const progressionGame = (counter) => {
  greeting(counter, description);
  const generatedNumber = generateRandomNumber();
  const arrayProgression = progressionArrayGenerator(generatedNumber);
  const progression = progressionFromArray(arrayProgression);
  askQuestion(`${progression[1]}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = progression[0];
  console.log(correctAnswer);
  nextStep(progressionGame, answer, correctAnswer, counter);
};

export default progressionGame;
