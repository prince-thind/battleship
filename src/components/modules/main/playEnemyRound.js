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
  // console.log(movesToMake);
  
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
  const nineElements = getNineNumbers(number);
  // console.log(nineElements);
  for (let number of nineElements) {
    if (!number) break;
    console.log({number,nineElements});
    const gridElement = battleGround.player[number[0]][number[1]];
    if (!gridElement.hit) {
      res.push(number[0] + '' + number[1]);
    }
  }
  movesToMake = res;
}

function getNineNumbers(number) {
  const number1 = number[0];
  const number2 = number[1];
  const res = Array(9).fill(null);
  for (let i = -1, k = 0; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const targetNumber = (+number1 + i) + '' + (+number2 + j);
      if (numberValid(targetNumber)) {
        res[k++] = targetNumber;
      }
      // console.log(res);
    }
  }
  return res;

  function numberValid(num) {
    if (num[0] < 0 || num[1] < 0) return false;
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
