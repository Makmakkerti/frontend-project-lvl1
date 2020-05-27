import { generateNumberInRange } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const calcGame = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  const operator = operators[generateNumberInRange(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

export default { description, getData: calcGame };
