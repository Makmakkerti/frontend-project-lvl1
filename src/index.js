/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
};
