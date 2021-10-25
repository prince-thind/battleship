import { battleGround } from '../state/battleground';

const madeMoves = [];
let movesToMake = [];

function playEnemyRound() {
  if (movesToMake.length == 0) {
    const random = getRandomMove();
    makeMove(random);
  } else {
    const lastElement = movesToMake.pop();
    makeMove(lastElement);
  }
}

function makeMove(number) {
  const gridElement = battleGround.player[number[0]][number[1]];
  if (!gridElement.hit && !gridElement.empty) {
    createMoves(number);
  }
  gridElement.hit = 1;
  madeMoves.push(number);
}

function createMoves(number) {
  const res = [];
  const adjacentNumbers = getAdjacentNumbers(number);
  for (let number of adjacentNumbers) {
    if (!number) break;
    const gridElement = battleGround.player[number[0]][number[1]];
    if (!gridElement.hit) {
      res.push(number[0] + '' + number[1]);
    }
  }
  appendUnique(movesToMake, res);
}

function appendUnique(target, source) {
  for (const number of source) {
    if (!target.includes(number)) {
      target.push(number);
    }
  }
}

function getAdjacentNumbers(number) {
  const number1 = number[0];
  const number2 = number[1];
  const res = Array(4).fill(null);
  res[0]=+number1-1+''+number2;
  res[1]=+number1+1+''+number2;
  res[2]=+number1+''+(+number2-1);
  res[3]=+number1+''+(+number2+1);
  return res;

}

function getRandomMove() {
  let number = randomNumber();
  while (madeMoves.includes(number)) {
    number = randomNumber();
  }
  return number;
}
function randomNumber() {
  return Math.trunc(Math.random() * 9) + '' + Math.trunc(Math.random() * 9);
}
export default playEnemyRound;
