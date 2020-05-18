import { generateNumberInRange } from '../utils.js';

const description = 'What is the result of the expression?';

const generateOperationAndAnswer = (num1, num2) => {
  const operators = ['+', '-', '*'];
  const operator = operators[generateNumberInRange(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  switch (operator) {
    case '+':
      return [question, (num1 + num2).toString()];
    case '-':
      return [question, (num1 - num2).toString()];
    case '*':
      return [question, (num1 * num2).toString()];
    default:
      throw new Error('Wrong operator was given in generateOperation');
  }
};

const generateGameData = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  return generateOperationAndAnswer(num1, num2);
};

const calcGame = () => [description, generateGameData()];
export default calcGame;
