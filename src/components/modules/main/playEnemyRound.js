import { battleGround } from '../state/battleground';

async function playEnemyRound() {
  await loadWaitScreen(2);
  const random =
    Math.trunc(Math.random() * 9) + '' + Math.trunc(Math.random() * 9);
  const gridElement = battleGround.player[random[0]][random[1]];
  if (gridElement.empty == 0) {
    gridElement.hit = 1;
  }
}

async function loadWaitScreen(n) {
    const gameHeading = document.querySelector('#game-heading');
    gameHeading.textContent='enemy Deciding!'
  await sleep(n);

}
async function sleep(n) {
  return new Promise((resolve) => setTimeout(resolve, n * 1000));
}
export default playEnemyRound;
