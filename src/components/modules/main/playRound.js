import { battleGround, render } from '../state/battleground';
import playEnemyRound from './playEnemyRound';

function playRound(e) {
  if (battleGround.winner) {
    render();
    return;
  }
  const target = e.target;
  const [i, j] = target.getAttribute('data-tag').split('');
  const hitStatus=battleGround.enemy[i][j].hit;
  battleGround.enemy[i][j].hit = true;

  if (updateWinner() || hitStatus) {
    render();
    return;
  }

  playEnemyRound();
  updateWinner();
  render();
}

function updateWinner() {
  const playerResult = checkALL(battleGround.enemy);
  const enemyResult = checkALL(battleGround.player);

  if (playerResult) {
    battleGround.winner = 'Player';
  }
  if (enemyResult) {
    battleGround.winner = 'Enemy';
  }

  return playerResult || enemyResult || null;

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
