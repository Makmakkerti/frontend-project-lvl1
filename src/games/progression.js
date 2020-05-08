import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, nextStep, generateRandomNumber,
} from '../index.js';

const progressionArrayGenerator = (startNumber, progressionLength = 10) => {
  const step = Math.round((Math.random() * progressionLength));
  let temp = startNumber;
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const progressionFromArray = (arr) => {
  const progressionLength = arr.length;
  const hidePosition = Math.round((Math.random() * (arr.length - 1)));
  const result = [];
  let progressionString = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidePosition) {
      progressionString += '.. ';
      result.push(arr[i]);
    } else {
      progressionString += `${arr[i]} `;
    }
  }
  result.push(progressionString);
  return result;
};

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
