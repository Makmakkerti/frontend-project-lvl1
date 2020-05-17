import { generateNumberInRange } from '../utils.js';

const description = 'What is the result of the expression?';

const generateOperation = (num1, num2) => {
  const operators = ['+', '-', '*'];
  const operator = operators[generateNumberInRange(0, 2)];

  switch (operator) {
    case '+':
      return [(num1 + num2).toString(), operator];
    case '-':
      return [(num1 - num2).toString(), operator];
    case '*':
      return [(num1 * num2).toString(), operator];
    default:
      throw new Error('Wrong operator was given in generateOperation');
  }
};

const generateGameData = () => {
  const num1 = generateNumberInRange(1, 100);
  const num2 = generateNumberInRange(1, 100);
  const [answer, operator] = generateOperation(num1, num2);
  const question = `${num1} ${operator} ${num2}`;
  return [question, answer];
};

const calcGame = () => [description, generateGameData()];

export default calcGame;
