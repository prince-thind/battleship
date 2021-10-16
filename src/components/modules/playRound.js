import { battleGround, render } from './battleground';
import playEnemyRound from './playEnemyRound';

async function playRound(e) {
  if (battleGround.winner) {
    render();
    return;
  }
  const target = e.target;
  const [i, j] = target.getAttribute('data-tag').split('');
  if (!battleGround.enemy[i][j].empty) {
    battleGround.enemy[i][j].hit = true;
  }
  if (updateWinner()) {
    render();
    return;
  }
  render();
  await playEnemyRound();
  render();
  
}

function updateWinner() {
  const playerResult = checkALL(battleGround.enemy);
  const enemyResult=checkALL(battleGround.player);

  if(playerResult){
    battleGround.winner='player';
  }
  if(enemyResult){
    battleGround.winner='enemy';
  }

  return playerResult||enemyResult||null;

  function checkALL(grid) {
    let result = true;
    for (let arr of grid) {
      for (let obj of arr) {
        if (obj.empty == 0 && obj.hit == 0) {
          result = false;
        }
      }
    }
    return result;
  }
}

export default playRound;
