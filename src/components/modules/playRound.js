import { battleGround, render } from './battleground';

async function playRound(e) {
  const target = e.target;
  const [i, j] = target.getAttribute('data-tag').split('');
  if (!battleGround.enemy[i][j].empty) {
    battleGround.enemy[i][j].hit = true;
  }
  render();
}

export default playRound;
