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
  console.log('movestomake', movesToMake);
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
  console.log('newmoves', res);
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
  const res = Array(9).fill(null);
  for (let i = -1, k = 0; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i == j && i == 0) continue;
      const targetNumber = +number1 + i + '' + (+number2 + j);
      if (numberValid(targetNumber)) {
        res[k++] = targetNumber;
      }
    }
  }
  console.log('9nums', res);
  return res;

  function numberValid(num) {
    if (num[0] == '-' || num[2] == '-' || num[1] == '-') return false;
    if (num[0] > 8 || num[1] > 8) return false;
    return true;
  }
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
