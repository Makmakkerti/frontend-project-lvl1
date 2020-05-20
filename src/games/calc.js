import { generateNumberInRange } from '../utils.js';

const description = 'What is the result of the expression?';

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[generateNumberInRange(0, 2)];
};

const generateOperationAndAnswer = (num1, num2) => {
  const operator = generateOperator();
  const question = `${num1} ${operator} ${num2}`;
  switch (operator) {
    case '+':
      return [question, (num1 + num2).toString()];
    case '-':
      return [question, (num1 - num2).toString()];
    case '*':
      return [question, (num1 * num2).toString()];
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const calcGame = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  return [description, generateOperationAndAnswer(num1, num2)];
};

export default calcGame;
