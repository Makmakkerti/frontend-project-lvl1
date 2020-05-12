import { numberOfRounds } from '../index.js';

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

const generateGameData = () => {
  const startNumber = Math.floor(Math.random() * (100 - 1) + 1);
  const arrayProgression = progressionArrayGenerator(startNumber);
  const progression = progressionFromArray(arrayProgression);
  const question = `${progression[1]}`;
  const correctAnswer = progression[0];
  return [question, correctAnswer];
};

const progressionGame = () => {
  const gameData = [];
  for (let i = 0; i <= numberOfRounds; i += 1) {
    gameData.push(generateGameData());
  }
  return [description, gameData];
};

export default progressionGame;
