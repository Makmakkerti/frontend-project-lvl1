import { numberOfRounds } from '../index.js';

const generateSign = (rand) => {
  if (rand < 33) return '+';
  if (rand > 33 && rand < 67) return '-';
  return '*';
};

const calculateOperation = (operator = '+', num1, num2) => {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const generatedNumber1 = Math.floor(Math.random() * (100));
    const generatedNumber2 = Math.floor(Math.random() * (100));
    const operator = generateSign(Math.floor(Math.random() * (100)));
    const question = `${generatedNumber1} ${operator} ${generatedNumber2}`;
    const correctAnswer = calculateOperation(operator, generatedNumber1, generatedNumber2);
    gameData.push([question, correctAnswer]);
  }
  return gameData;
};

const calcGame = () => [description, generateGameData()];

export default calcGame;
