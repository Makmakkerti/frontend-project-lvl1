import generateNumberInRange from '../utils.js';

const description = 'What is the result of the expression?';

const generateSign = (rand) => {
  if (rand === 1) return '+';
  if (rand === 2) return '-';
  return '*';
};

const calculateOperation = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const generateGameData = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  const operator = generateSign(generateNumberInRange(1, 3));
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateOperation(operator, num1, num2).toString();
  return [question, correctAnswer];
};

const calcGame = () => [description, generateGameData()];

export default calcGame;
