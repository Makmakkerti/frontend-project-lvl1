import { generateNumberInRange } from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const generateProgression = (firstNumber, length, step) => {
  const progression = Array(length).fill().map((_item, index) => firstNumber + step * index);
  return progression;
};

const getQuestion = (progression, hiddenPosition) => {
  const question = [...progression];
  question[hiddenPosition] = '..';
  return question.join(' ');
};

const progressionGame = () => {
  const firstNumber = generateNumberInRange(1, 100);
  const step = generateNumberInRange(2, 10);
  const hiddenPosition = generateNumberInRange(1, lengthOfProgression - 1);
  const progression = generateProgression(firstNumber, lengthOfProgression, step);
  const question = getQuestion(progression, hiddenPosition);
  const answer = progression[hiddenPosition].toString();
  return [question, answer];
};

export default { description, getData: progressionGame };
