import { battleGround } from '../state/battleground';

function playEnemyRound() {
  const random =
    Math.trunc(Math.random() * 9) + '' + Math.trunc(Math.random() * 9);
  const gridElement = battleGround.player[random[0]][random[1]];
  // if (gridElement.empty == 0) {
    gridElement.hit = 1;
  // }
}

export default playEnemyRound;
