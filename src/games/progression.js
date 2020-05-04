/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import {
  greeting, askQuestion, wrongAnswer, winner, generateRandomNumber, log,
} from '../index.js';

const progressionLength = 10;
const progressionArrayGenerator = (startNumber) => {
  const step = Math.round((Math.random() * 10));
  let temp = startNumber;
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const progressionFromArray = (arr) => {
  const hidePosition = Math.round((Math.random() * (progressionLength - 1)));
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

const progressionGame = (counter, username) => {
  const description = 'What number is missing in the progression?';
  if (counter === 3) return winner();
  if (counter === 0) greeting(description);

  const generatedNumber = generateRandomNumber();
  const arrayProgression = progressionArrayGenerator(generatedNumber);
  const progression = progressionFromArray(arrayProgression);
  askQuestion(`${progression[1]}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = progression[0];

  // eslint-disable-next-line no-mixed-operators
  if (+answer === correctAnswer) {
    log('Correct!');
    return progressionGame(counter + 1, username);
  }
  return wrongAnswer(answer, correctAnswer);
};

export default progressionGame;
