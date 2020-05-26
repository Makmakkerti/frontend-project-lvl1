import { generateNumberInRange } from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgression = (firstNumber, length, step) => {
  const progression = [];
  let acc = firstNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(acc);
    acc += step;
  }
  return progression;
};

const getQuestion = (progressionArray, hiddenPosition) => {
  let question = '';
  for (let i = 0; i < progressionArray.length; i += 1) {
    if (i === hiddenPosition) {
      question += '.. ';
    } else {
      question += `${progressionArray[i]} `;
    }
  }
  return question;
};

const progressionGame = () => {
  const startNumber = generateNumberInRange(1, 100);
  const step = generateNumberInRange(2, 10);
  const hiddenPosition = generateNumberInRange(1, lengthOfProgression - 1);
  const progression = generateProgression(startNumber, lengthOfProgression, step);
  const question = getQuestion(progression, hiddenPosition);
  const answer = progression[hiddenPosition].toString();
  return [description, [question, answer]];
};

export default progressionGame;
