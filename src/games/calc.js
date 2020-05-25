import { generateNumberInRange } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const calcGame = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  const operator = operators[generateNumberInRange(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = generateAnswer(num1, num2, operator);
  return [description, [question, answer]];
};

export default calcGame;
