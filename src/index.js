import readlineSync from 'readline-sync';

const { log } = console;
let username;
const numberOfRounds = 3;

// General Functions
const runGame = (gameType, counter = 0) => {
  if (counter === numberOfRounds) return log(`Congratulations, ${username}`);
  return gameType(counter);
};

const greeting = (counter, description) => {
  if (counter === 0) {
    log('Welcome to Brain Games!');
    username = readlineSync.question('May I have your name?: ');
    log(`Hello, ${username}!`);
    log(description);
  }
};

const askQuestion = (q) => {
  log(`Question: ${q}`);
};

const wrongAnswer = (wrong, correct) => {
  log(`"${wrong}" is wrong answer ;(. Correct answer was "${correct}".`);
  log(`Let's try again, ${username}!`);
};

const nextStep = (gameType, answer, correctAnswer, counter) => {
  if (answer === correctAnswer.toString()) {
    log('Correct!');
    return runGame(gameType, counter + 1);
  }
  return wrongAnswer(answer, correctAnswer);
};

const generateRandomNumber = () => Math.floor(Math.random() * (100));

// Calc Game Functions
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

// GCD Game Functions
const findGcd = (a, b) => {
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  if (max % min === 0) return min;

  for (let i = min; i > 1; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return 1;
};

// Prime Game Functions
const isPrimeNumber = (num) => {
  if (num <= 0 || num === 1) return false;
  if (num === 2 || num === 3) return true;

  const maxDivider = Math.round(num / 2);
  for (let i = 2; i < maxDivider; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

// Progression Game Functions
const progressionArrayGenerator = (startNumber, progressionLength = 10) => {
  const step = Math.round((Math.random() * progressionLength));
  let temp = startNumber;
  const arr = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(temp);
    temp += step;
  }
  return arr;
};

const progressionFromArray = (arr) => {
  const progressionLength = arr.length;
  const hidePosition = Math.round((Math.random() * (arr.length - 1)));
  const result = [];
  let progressionString = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidePosition) {
      progressionString += '.. ';
      result.push(arr[i]);
    } else {
      progressionString += `${arr[i]} `;
    }
  }
  result.push(progressionString);
  return result;
};

export {
  runGame, greeting, askQuestion, nextStep, generateRandomNumber,
  generateSign, calculateOperation, findGcd, isPrimeNumber,
  progressionArrayGenerator, progressionFromArray,
};
