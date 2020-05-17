import { generateNumberInRange } from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const makeProgressionAndAnswer = (startNumber, progressionLength) => {
  const hidePosition = generateNumberInRange(1, progressionLength - 1);
  const step = generateNumberInRange(2, 10);
  let progressionString = '';
  let answer = '';
  let temp = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidePosition) {
      progressionString += '.. ';
      answer = temp.toString();
      temp += step;
    } else {
      progressionString += `${temp} `;
      temp += step;
    }
  }
  return [progressionString, answer];
};

const generateGameData = () => {
  const startNumber = generateNumberInRange(1, 100);
  return makeProgressionAndAnswer(startNumber, lengthOfProgression);
};

const progressionGame = () => [description, generateGameData()];

export default progressionGame;
