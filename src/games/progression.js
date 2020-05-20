import { generateNumberInRange } from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgression = (startNumber, length) => {
  const step = generateNumberInRange(2, 10);
  const progression = [];
  let acc = startNumber;

  for (let i = 0; i < length; i += 1) {
    progression.push(acc);
    acc += step;
  }
  return progression;
};

const makeProgressionAndAnswer = (progressionArray) => {
  const { length } = progressionArray;
  const hidePosition = generateNumberInRange(1, length - 1);
  const answer = progressionArray[hidePosition].toString();
  let progressionString = '';

  for (let i = 0; i < length; i += 1) {
    if (i === hidePosition) {
      progressionString += '.. ';
    } else {
      progressionString += `${progressionArray[i]} `;
    }
  }
  return [progressionString, answer];
};

const progressionGame = () => {
  const startNumber = generateNumberInRange(1, 100);
  const gameData = makeProgressionAndAnswer(generateProgression(startNumber, lengthOfProgression));
  return [description, gameData];
};

export default progressionGame;
