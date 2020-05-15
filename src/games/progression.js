import generateNumberInRange from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, progressionLength = 10) => {
  const hidePosition = generateNumberInRange(1, progressionLength - 1);
  const step = generateNumberInRange(2, 10);
  const result = [];
  let progressionString = '';
  let temp = startNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidePosition) {
      progressionString += '.. ';
      result.push(temp.toString());
      temp += step;
    } else {
      progressionString += `${temp} `;
      temp += step;
    }
  }
  result.push(progressionString);
  return result;
};

const generateGameData = () => {
  const startNumber = generateNumberInRange(1, 100);
  const [answer, question] = makeProgression(startNumber);
  return [question, answer];
};

const progressionGame = () => [description, generateGameData()];

export default progressionGame;
