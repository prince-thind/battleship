import { battleGround } from '../state/battleground';

const madeMoves=[];

function playEnemyRound() {
  const random = getRandomMove();
  const gridElement = battleGround.player[random[0]][random[1]];
  gridElement.hit = 1;
}

function getRandomMove() {
  let number= randomNumber();
  while(madeMoves.includes(number)){
    number=randomNumber();
  }
  
  madeMoves.push(number);
  return number;
}
function randomNumber(){
  return Math.trunc(Math.random() * 9) + '' + Math.trunc(Math.random() * 9);
  
}
export default playEnemyRound;
